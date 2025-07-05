'use client';
import { Button } from './ui/button';
import HomePageListCard from './homepage-list-card';
import { loadOpportunities } from '@/sanity/lib/queries';
import { useEffect, useState } from 'react';
import { LoaderIcon } from 'lucide-react';
import { Opportunities } from '@/sanity/types';

interface HomePageListProps {
  title: string;
  opportunityType: 'grant' | 'fellowship';
  limit?: number;
  loadMoreAmount?: number;
}
const HomePageList = ({ title, opportunityType, limit = 4, loadMoreAmount = 2 }: HomePageListProps) => {
  const [data, setData] = useState<Opportunities[]>([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(limit);
  const showLoadMoreButton = data.length < totalDataCount;

  useEffect(() => {
    const getData = async () => {
      setIsLoadingMore(true);
      try {
        const data = await loadOpportunities(opportunityType, limit, 0);
        setData(data.opportunities);
        setTotalDataCount(data.totalCount);
      } catch (err) {
        console.error('Error fetching data:', err);
        setData([]);
        setTotalDataCount(0);
      } finally {
        setIsLoadingMore(false);
      }
    };
    getData();
  }, [opportunityType, limit]);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    const newLimit = currentLimit + loadMoreAmount;

    try {
      const { opportunities, totalCount } = await loadOpportunities(opportunityType, newLimit, 0);
      setData(opportunities);
      setTotalDataCount(totalCount);
      setCurrentLimit(newLimit);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (isLoadingMore && data.length === 0) {
    return (
      <div className='flex items-center justify-center h-64'>
        <LoaderIcon
          className='animate-spin text-orange-500'
          size={40}
        />
      </div>
    );
  }

  if (!data || data.length === 0)
    return (
      <div className='flex items-center justify-center h-64'>
        <p>Data not available</p>
      </div>
    );
  return (
    <div>
      <h2 className='text-3xl font-medium mb-12'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {data.map((item, i) => (
          <HomePageListCard
            data={item}
            key={i}
          />
        ))}
      </div>

      {showLoadMoreButton && (
        <div className='flex items-center justify-center'>
          <Button
            onClick={handleLoadMore}
            className='text-lg bg-white text-black py-7 w-full md:w-1/3 mt-10 rounded-md border border-gray-600 hover:text-white hover:bg-black duration-300 cursor-pointer'>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePageList;
