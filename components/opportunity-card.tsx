import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/sanity-image-url';

import { Opportunities } from '@/sanity/types';
import { ArrowRightIcon } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';

interface OpportunityCardProps {
  data: Opportunities;
}

const OpportunityCard = ({ data }: OpportunityCardProps) => {
  return (
    <div className='border border-gray-300 px-4 py-5 rounded-md shadow-sm'>
      <div className='flex flex-col h-full'>
        <div className='relative aspect-square mb-5'>
          {data.image && (
            <Image
              src={urlFor(data.image).width(500).height(500).url()}
              alt='opportunity image'
              fill
              className='object-cover rounded-md'
            />
          )}
        </div>

        <div className='flex justify-between'>
          <span
            className={`capitalize ${
              data?.type?.toLowerCase() === 'career'
                ? 'bg-gray-300 text-gray-800'
                : data?.type?.toLowerCase() === 'scholarship'
                  ? 'bg-blue-200 text-blue-500'
                  : data?.type?.toLowerCase() === 'fellowship'
                    ? 'bg-blue-300 text-blue-700'
                    : 'bg-yellow-200 text-yellow-700'
            }  text-sm font-medium rounded-xl px-3 py-1`}>
            {data.type}
          </span>

          {data.funding && <span className='text-sm text-green-700 font-medium bg-green-200 rounded-xl px-3 py-1'>{data?.funding}</span>}
        </div>

        <div className='my-5 flex flex-col gap-2.5'>
          <h3 className='text-xl mb-2 truncate font-medium'>{data.title}</h3>
          {data.deadline && (
            <div className='flex items-center gap-3'>
              <FaCalendarAlt
                className='text-gray-600'
                size={18}
              />
              <p className=' text-gray-700 text-sm font-semibold'>Deadline: {new Date(data.deadline).toDateString()}</p>
            </div>
          )}
          {data.country && (
            <div className='flex items-center gap-3'>
              <FaLocationDot className='text-gray-600' />
              <p className='text-gray-700 text-sm font-semibold'>{data.country}</p>
            </div>
          )}
        </div>

        <p className='mb-5 text-gray-700 leading-relaxed line-clamp-4'>{data.shortdesc}</p>

        <Link
          href={`/details/${data.slug?.current}`}
          className='text-lg text-blue-600 font-medium flex items-center gap-2 self-stretch mt-auto group'>
          <span className='text-sm '>View Details</span>
          <ArrowRightIcon className='text-blue-600' />
        </Link>
      </div>
    </div>
  );
};

export default OpportunityCard;
