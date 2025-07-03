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
    <div className='flex items-center justify-center gap-2 my-10'>
      <Button
        onClick={() => onPageChange(Math.max(1, activePage - 1))}
        disabled={activePage === 1}>
        <ChevronLeftIcon />
      </Button>

      <div className='flex items-center gap-1'>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-1 rounded-sm cursor-pointer ${i + 1 === activePage ? 'bg-yellow-300 text-white' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>

      <Button
        onClick={() => onPageChange(Math.min(totalPages, activePage + 1))}
        disabled={activePage === totalPages}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default Pagination;
