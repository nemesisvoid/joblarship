import { OpportunityType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface HomePageListCardProps {
  data: OpportunityType;
}
const HomePageListCard = ({ data }: HomePageListCardProps) => {
  return (
    <div className='flex gap-4 mb-10'>
      {data.image && (
        <div className='relative aspect-square w-[25%] shrink-0'>
          <Image
            src={data.image}
            alt=''
            fill
            className='object-cover rounded-xs'
          />
        </div>
      )}

      <div>
        <Link
          href={`details/${data.slug}`}
          className='text-xl font-medium hover:text-primary-100 duration-100 mb-3 inline-block max-w-[80%]'>
          <h3>{data.title}</h3>
        </Link>

        <p className='text-lg text-gray-600'>Deadline: {data.deadline}</p>
      </div>
    </div>
  );
};

export default HomePageListCard;
