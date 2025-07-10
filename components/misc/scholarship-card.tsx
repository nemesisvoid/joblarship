import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';

import { Opportunities } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/sanity-image-url';
import { WalletIcon } from 'lucide-react';
import { FaCalendarAlt } from 'react-icons/fa';

const ScholarshipCard = ({ data }: { data: Opportunities }) => {
  return (
    <div className='bg-white w-full flex flex-col md:flex-row  gap-6 p-5 shadow-md rounded-md'>
      {data.image && (
        <div className='relative aspect-square md:w-1/3 shrink-0'>
          <Image
            src={urlFor(data.image).width(500).height(500).url()}
            alt=''
            fill
            className='rounded-md object-cover'
          />
        </div>
      )}

      <div className='flex flex-col w-full'>
        <h2 className='text-2xl font-medium '>{data.title}</h2>
        <p className='text-[16px] text-gray-400 mt-2 mb-4'>{data.location}</p>

        <div className='flex items-center flex-wrap gap-3 md:gap-6 mb-6'>
          {data.deadline && (
            <p className='text-sm bg-purple-100 text-purple-500 flex items-center gap-2 px-3 py-2 rounded-xs'>
              <FaCalendarAlt size={20} /> {new Date(data.deadline).toDateString()}
            </p>
          )}
          <p className='text-sm bg-green-100 text-green-500 flex items-center gap-2 px-3 py-2 rounded-xs'>
            <WalletIcon /> {data.funding}
          </p>
        </div>

        <p className='text-lg leading-loose mb-10 md:mb-2 line-clamp-3'>{data.shortdesc}</p>

        <div className='md:self-end mt-auto w-1/3'>
          <Button
            asChild
            className='text-xl text-white bg-primary-100 w-full py-6 hover:bg-primary-100/70'>
            <Link href={`/details/${data.slug?.current}`}>Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
