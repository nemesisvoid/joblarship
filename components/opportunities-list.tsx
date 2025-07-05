'use client';
import OpportunityCard from './opportunity-card';
import GrantCard from './misc/grant-card';
import CareerCard from './/misc/career-card.tsx';
import ScholarshipCard from './misc/scholarship-card';
import FellowshipCard from './misc/fellowship-card';
import Pagination from './misc/pagination';
import { useEffect, useState } from 'react';
import { Opportunities } from '@/sanity/types';
import { fetchPaginatedOpportunities } from '@/sanity/lib/queries';
import { Button } from './ui/button';
import Loader from './misc/loader';
import ErrorMessage from './misc/error-message';

interface OpportunitiesListProps {
  title: string;
  filterButton?: boolean;
  educationLevel?: 'undergraduate' | 'masters' | 'phd';
  careerLevel?: 'academic' | 'industry' | 'others';
  layoutType?: 'grid' | 'flex';
  listType?: 'career' | 'scholarship' | 'fellowship' | 'academic' | 'grant';
}

const PAGE_SIZE = 6;

const OpportunitiesList = ({ title, layoutType = 'grid', listType, careerLevel, educationLevel, filterButton = false }: OpportunitiesListProps) => {
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState<Opportunities[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilter, setActiveFilter] = useState(listType || '');

  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsPageLoading(true);
      const items = await fetchPaginatedOpportunities(activePage, PAGE_SIZE, activeFilter, careerLevel, educationLevel);
      setData(items.opportunities);
      const total = items.totalCount;
      setTotalPages(Math.ceil(total / PAGE_SIZE));
      setIsPageLoading(false);
    };
    getData();
  }, [activePage, listType, activeFilter, careerLevel, educationLevel]);

  useEffect(() => {
    setActiveFilter(listType || '');
  }, [listType]);

  const handleFilterChange = (filterValue: string) => {
    if (activeFilter !== filterValue) {
      setActiveFilter(filterValue);
      setActivePage(1);
    }
  };

  const setFilterButtonClassName = (filterValue: string) => `
    text-lg text-gray-700 p-6 rounded-4xl bg-white border border-black
    hover:bg-green-500 hover:text-white cursor-pointer
    ${activeFilter === filterValue ? 'bg-green-700 text-white border-none' : ''}
  `;

  return (
    <div className='relative'>
      <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-10'>
        <h2 className='text-2xl md:text-4xl font-medium mb-8'>{title}</h2>

        {filterButton && (
          <div className='flex items-center flex-wrap gap-5 self-start'>
            <Button
              className={setFilterButtonClassName('')}
              onClick={() => handleFilterChange('')}>
              All
            </Button>

            <Button
              className={setFilterButtonClassName('career')}
              onClick={() => handleFilterChange('career')}>
              Jobs
            </Button>

            <Button
              className={setFilterButtonClassName('scholarship')}
              onClick={() => handleFilterChange('scholarship')}>
              Scholarships
            </Button>

            <Button
              className={setFilterButtonClassName('fellowship')}
              onClick={() => handleFilterChange('fellowship')}>
              Fellowship
            </Button>
            <Button
              className={setFilterButtonClassName('grant')}
              onClick={() => handleFilterChange('grant')}>
              Grants
            </Button>
          </div>
        )}
      </div>

      {isPageLoading ? (
        <Loader />
      ) : !data || data.length === 0 ? (
        <ErrorMessage>No opportunities available at the moment. Please check back later.</ErrorMessage>
      ) : (
        <div className={`${layoutType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-8'}`}>
          {!listType &&
            data.map((item, i) => (
              <OpportunityCard
                data={item}
                key={i}
              />
            ))}

          {listType === 'grant' &&
            data.map((item, i) => (
              <GrantCard
                data={item}
                key={i}
              />
            ))}

          {listType === 'academic' &&
            data.map((item, i) => (
              <CareerCard
                data={item}
                key={i}
              />
            ))}

          {listType === 'fellowship' &&
            data.map((item, i) => (
              <FellowshipCard
                data={item}
                key={i}
              />
            ))}

          {listType === 'scholarship' &&
            data.map((item, i) => (
              <ScholarshipCard
                data={item}
                key={i}
              />
            ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          activePage={activePage}
          totalPages={totalPages}
          onPageChange={page => setActivePage(page)}
        />
      )}
    </div>
  );
};

export default OpportunitiesList;
