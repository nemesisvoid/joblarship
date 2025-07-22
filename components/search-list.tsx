'use client';
import React from 'react';

import { useSearchStore } from '@/store';
import OpportunityCard from './opportunity-card';
import Loader from './misc/loader';
import { X } from 'lucide-react';

const SearchList = () => {
  const { results, country, opportunity, isLoading, clearFilters } = useSearchStore();
  console.log(results);

  if (isLoading) return <Loader />;
  if (!opportunity || !country) return null;

  if (opportunity && country && (!results || results.length === 0))
    return (
      <div className='container flex flex-col md:flex-row justify-between max-md:gap-4 md:items-center my-20'>
        <p className='text-2xl'>No filters matches this search</p>

        <button
          onClick={clearFilters}
          className='self-start flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg shadow-sm transition-colors cursor-pointer'>
          <span>Clear Filters</span>
          <X className='w-4 h-4' />
        </button>
      </div>
    );

  return (
    <div className='container my-20'>
      <div className='flex flex-col max-md:gap-4 md:flex-row justify-between mb-10'>
        <div className='mb-2'>
          <h3 className='text-xl'>
            {results && results.length > 0 ? `Search results for "${opportunity}" opportunities in ${country}` : 'No filters matches this search'}
          </h3>

          <p className='text-lg text-gray-600'>{results && `Found ${results.length} results`}</p>
        </div>

        <button
          onClick={clearFilters}
          className='self-start md:self-center flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg shadow-sm transition-colors cursor-pointer'>
          <span>Clear Filters</span>
          <X className='w-4 h-4' />
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {results &&
          results.length > 0 &&
          results.map((result, index) => (
            <OpportunityCard
              key={index}
              data={result}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchList;
