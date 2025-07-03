import { urlFor } from '@/sanity/lib/sanity-image-url';
import { Opportunities } from '@/sanity/types';
import { ArrowRightIcon, CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
              alt=''
              fill
              className='object-cover rounded-md'
            />
          )}
        </div>

        <div className='flex justify-between'>
          <span
            className={`capitalize ${
              data?.type?.toLowerCase() === 'academic'
                ? 'bg-gray-200 text-gray-700'
                : data?.type?.toLowerCase() === 'scholarship'
                  ? 'bg-blue-200 text-blue-500'
                  : data?.type?.toLowerCase() === 'fellowship'
                    ? 'bg-blue-400'
                    : 'bg-yellow-400'
            }  text-sm font-medium rounded-xl px-3 py-1`}>
            {data.type}
          </span>

          {data.funding && <span className='text-sm text-green-700 font-medium bg-green-200 rounded-xl px-3 py-1'>{data?.funding}</span>}
        </div>

        <div className='my-5 flex flex-col gap-2.5'>
          <h3 className='text-xl mb-2 truncate font-medium'>{data.title}</h3>
          <div className='flex items-center gap-3'>
            <CalendarIcon color='gray' />
            <p className=' text-gray-700 text-sm font-medium'>Deadline: {data.deadline}</p>
          </div>
          <div className='flex items-center gap-3'>
            <LocateIcon color='gray' />
            <p className='text-gray-700 text-sm font-medium'>{data.location}</p>
          </div>
        </div>

        <p className='mb-5 text-gray-700 text-lg leading-relaxed line-clamp-5 '>{data.description}</p>

        <Link
          href={`/details/${data.slug?.current}`}
          className='text-lg text-blue-600 font-medium flex items-center gap-2 self-stretch mt-auto'>
          View Details
          <ArrowRightIcon color='blue' />
        </Link>
      </div>
    </div>
  );
};

export default OpportunityCard;
