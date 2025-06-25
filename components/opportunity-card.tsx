import { OpportunityType } from '@/types';
import { ArrowRightIcon, CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface OpportunityCardProps {
  data: OpportunityType;
}

const OpportunityCard = ({ data }: OpportunityCardProps) => {
  return (
    <div className='border border-gray-300 p-4 rounded-md shadow-sm'>
      <div className='relative aspect-square mb-5'>
        <Image
          src={data.image}
          alt=''
          fill
          className='object-cover rounded-md'
        />
      </div>

      <div className='flex justify-between'>
        <span
          className={`${
            data?.type?.toLowerCase() === 'academic'
              ? 'bg-gray-200 text-gray-700'
              : data.type.toLowerCase() === 'scholarship'
              ? 'bg-blue-200 text-blue-500'
              : data.type.toLowerCase() === 'fellowship'
              ? 'bg-blue-400'
              : 'bg-yellow-400'
          }  text-sm font-medium rounded-xl px-3 py-1`}>
          {data.type}
        </span>

        {data.fundingType && <span className='text-sm text-green-700 font-medium bg-green-200 rounded-xl px-3 py-1'>{data.fundingType}</span>}
      </div>

      <div className='mt-5 mb-4 flex flex-col gap-2.5'>
        <h3 className='text-xl mb-1'>{data.title}</h3>
        <div className='flex items-center gap-3'>
          <CalendarIcon color='gray' />
          <p className=' text-gray-700 text-sm font-medium'>Deadline: {data.deadline}</p>
        </div>
        <div className='flex items-center gap-3'>
          <LocateIcon color='gray' />
          <p className='text-gray-700 text-sm font-medium'>{data.location}</p>
        </div>
      </div>

      <div className='mb-5 text-gray-700 text-lg'>{data.description}</div>

      <Link
        href={`/details/${data.slug}`}
        className='text-lg text-blue-600 font-medium flex items-center gap-2'>
        View Details
        <ArrowRightIcon color='blue' />
      </Link>
    </div>
  );
};

export default OpportunityCard;
