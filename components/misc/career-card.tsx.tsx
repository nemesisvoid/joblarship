import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Opportunities } from '@/sanity/types';

import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { WalletIcon } from 'lucide-react';

const CareerCard = ({ data }: { data: Opportunities }) => {
  return (
    <Card className='w-full px-3'>
      <CardHeader>
        <CardTitle className='text-2xl md:text-3xl font-semibold'>{data.title}</CardTitle>

        <CardTitle className='text-gray-400 text-lg my-2'>{data.employerName || data.location}</CardTitle>

        <div className='flex items-center flex-wrap gap-4 mb-1'>
          <div className='bg-blue-200 text-blue-600 flex items-center gap-3 py-1 px-3 rounded-xs'>
            <FaLocationDot size={20} />
            <span>{data.country}</span>
          </div>

          <div className='bg-purple-200 text-purple-600 flex items-center gap-3 px-3 py-1 rounded-xs'>
            <FaCalendarAlt size={20} />
            <span>{data.jobType}</span>
          </div>

          {data.salary && (
            <div className='bg-green-100 text-green-600 flex items-center gap-3 px-4 py-1 rounded-xs'>
              <WalletIcon />
              <p className='flex gap-1 items-center'>
                <span>NGN</span>
                {data.salary}
              </p>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-lg leading-relaxed text-gray-700 line-clamp-3'>{data.description}</CardDescription>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button
          asChild
          className='bg-primary-100 text-white text-lg py-6 px-6 w-full md:w-[15%]
           rounded-md hover:bg-primary-100/70 transition-colors duration-300'>
          <Link href={`/details/${data.slug?.current}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
