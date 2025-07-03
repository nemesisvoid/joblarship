import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { OpportunityType } from '@/types';
import { Opportunities } from '@/sanity/types';

const GrantCard = ({ data }: { data: Opportunities }) => {
  console.log(data);
  return (
    <Card className='w-full px-3'>
      <CardHeader>
        <CardTitle className='text-2xl md:text-3xl'>{data.title}</CardTitle>

        <CardTitle className='text-gray-400 font-medium my-2'>Global Plastic Action Partnership (GPAP)</CardTitle>

        <div className='flex items-center flex-wrap gap-4 mb-1'>
          <div className='bg-blue-200 text-blue-600 px-4 py-1 rounded-xs'>
            <span>For: NGOs</span>
          </div>
          <div className='bg-purple-100 text-purple-600 px-4 py-1 rounded-xs'>
            <span>Deadline: 22 May 2026</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-lg leading-relaxed text-gray-700'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequatur, amet eius non expedita ipsa rerum optio veniam atque, unde,
          molestiae eos? Animi, ratione sequi eligendi nihil odit praesentium laborum? Sit inventore doloribus dolores qui dolorem nemo dolore,
          aperiam tenetur! Labore temporibus odit ipsam natus, pariatur, soluta quidem animi debitis praesentium, distinctio expedita! Tenetur, rem?
          Officia dignissimos.
        </CardDescription>
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
