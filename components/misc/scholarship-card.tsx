import Link from 'next/link';
import { Button } from '../ui/button';
import { OpportunityType } from '@/types';
import Image from 'next/image';

const ScholarshipCard = ({ data }: { data: OpportunityType }) => {
  return (
    <div className='bg-white w-full flex gap-6 p-7 shadow-md rounded-md'>
      {data.image && (
        <div className='relative aspect-square w-1/3 shrink-0'>
          <Image
            src={data.image}
            alt=''
            fill
            className='rounded-md object-cover'
          />
        </div>
      )}

      <div className='flex flex-col'>
        <h2 className='text-2xl font-medium '>{data.title}</h2>
        <p className='text-[16px] text-gray-400 my-3'>{data.location}</p>

        <div className='flex items-center gap-2 mb-6'>
          <p className='bg-purple-100 text-purple-500 px-4 py-1 rounded-xs'>{data.deadline}</p>
          <p className='bg-green-100 text-green-500 px-4 py-1 rounded-xs'>{data.fundingType}</p>
        </div>

        <p className='text-lg leading-loose'>{data.description}</p>

        <div className='self-end mt-auto w-1/3'>
          <Button
            asChild
            className='text-xl text-white bg-primary-100 w-full py-6 hover:bg-primary-100/70'>
            <Link href={`/scholarship/${data.slug}`}>Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
