'use client';
import React from 'react';

import { useSearchStore } from '@/store';
import OpportunityCard from './opportunity-card';
import { Loader } from 'lucide-react';

const SearchList = () => {
  const { results, country, opportunity, isLoading, clearFilters } = useSearchStore();
  console.log(results);

  if (isLoading)
    return (
      <div className='flex items-center justify-center h-[20vh]'>
        <Loader
          className='animate-spin text-orange-600'
          size={45}
        />
      </div>
    );
  if (!opportunity || !country) return null;

  if (opportunity && country && (!results || results.length === 0))
    return (
      <div className='container my-20'>
        <p className='text-2xl'>No filters matches this search</p>
      </div>
    );

  return (
    <div className='container my-20'>
      <div className='flex justify-between mb-10'>
        <div className='mb-2'>
          <h3 className='text-xl'>
            {results && results.length > 0 ? `Search results for ${opportunity} opportunities in ${country}` : 'No filters matches this search'}
          </h3>

          <p className='text-lg text-gray-600'>{results && `Found ${results.length} results`}</p>
        </div>

        <button onClick={clearFilters}>Clear filter X</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <OpportunityCard data={results[0]} />
      </div>
    </div>
  );
};

export default SearchList;
