'use client';

import { opportunityType } from '@/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

import { useState } from 'react';
import { Input } from './ui/input';
import { client } from '@/sanity/lib/client';
import { getOpportunitiesBySearch } from '@/sanity/lib/queries';
import { useSearchStore } from '@/store';
const SearchForm = () => {
  // Local state for form fields
  const [localOpportunity, setLocalOpportunity] = useState('');
  const [localCountry, setLocalCountry] = useState('');
  const { setResults, setCountry, setOpportunity, setIsLoading } = useSearchStore();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!localCountry || !localOpportunity) return null;
    e.preventDefault();
    setIsLoading(true);

    // Update global store only on submit
    setOpportunity(localOpportunity);
    setCountry(localCountry);

    try {
      const data = await client.fetch(getOpportunitiesBySearch, { localOpportunity, localCountry });
      setResults(data);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full md:w-[75%] lg:w-[50%] z-10'>
      <div className='bg-white mt-10 p-8 lg:p-12 rounded-md'>
        <form className='flex flex-col sm:flex-row  md:items-center gap-10'>
          <div className='relative sm:w-1/2 lg:w-1/3'>
            <Select
              onValueChange={setLocalOpportunity}
              value={localOpportunity}>
              <label className='absolute -top-2 left-4 bg-white px-1 text-sm text-gray-500 z-10'>Opportunities</label>
              <SelectTrigger className='w-full py-7 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                {opportunityType.map(link => (
                  <SelectItem
                    key={link.name}
                    value={link.value}>
                    {link.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='relative sm:w-1/2 lg:w-1/3'>
            <label className='absolute -top-2 left-4 bg-white px-1 text-sm text-gray-500 z-10'>Region/Country</label>

            <Input
              placeholder='Search country'
              value={localCountry}
              onChange={e => setLocalCountry(e.target.value)}
              className='py-7 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500'
            />
          </div>

          <Button
            className='bg-primary-100 text-white text-xl py-7 px-4 sm:w-1/4 hover:bg-primary-100/70 cursor-pointer'
            disabled={!localCountry || !localOpportunity}
            onClick={handleSubmit}>
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
