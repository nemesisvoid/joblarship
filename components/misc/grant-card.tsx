import Link from 'next/link';

import { Opportunities } from '@/sanity/types';

import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

import { FaCalendarAlt } from 'react-icons/fa';

const GrantCard = ({ data }: { data: Opportunities }) => {
  return (
    <Card className='w-full px-3'>
      <CardHeader>
        <CardTitle className='text-2xl md:text-3xl'>{data.title}</CardTitle>

        <CardTitle className='text-gray-400 font-medium my-5 md:my-3'>{data.employerName || data.location}</CardTitle>

        <div className='flex items-center flex-wrap gap-4 mb-1'>
          <div className='bg-blue-200 text-blue-600 px-4 py-1 rounded-xs'>
            <span>For:{data.grantType} </span>
          </div>
          {data.deadline && (
            <div className='bg-purple-100 text-purple-600 flex items-center gap-3 px-3 py-1 rounded-xs'>
              <FaCalendarAlt size={20} />
              <span>Deadline: {new Date(data.deadline).toDateString()}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-lg leading-loose text-gray-700 line-clamp-3'>{data.shortdesc}</CardDescription>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button
          asChild
          className='bg-primary-100 text-white text-lg py-6 px-6 w-full md:w-[15%]
           rounded-md hover:bg-primary-100/70 transition-colors duration-300'>
          <Link href={`/details/${data.slug?.current}`}>Apply</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GrantCard;
