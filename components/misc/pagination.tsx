'use client';
import React from 'react';
import { Button } from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface PaginationProps {
  activePage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ activePage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className='flex items-center justify-center gap-4 my-10'>
      <Button
        className='text-2xl bg-gray-300 cursor-pointer hover:bg-gray-400'
        onClick={() => onPageChange(Math.max(1, activePage - 1))}
        disabled={activePage === 1}>
        <ChevronLeftIcon color='black' />
      </Button>

      <div className='flex items-center gap-3'>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`text-black bg-gray-300 px-3 py-1 rounded-sm cursor-pointer ${i + 1 === activePage ? 'bg-yellow-600 text-white' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>

      <Button
        className='text-2xl bg-gray-300 text-gray-500 cursor-pointer hover:bg-gray-400'
        onClick={() => onPageChange(Math.min(totalPages, activePage + 1))}
        disabled={activePage === totalPages}>
        <ChevronRightIcon color='black' />
      </Button>
    </div>
  );
};

export default Pagination;
