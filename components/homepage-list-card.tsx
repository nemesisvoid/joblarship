import { urlFor } from '@/sanity/lib/sanity-image-url';
import { Opportunities } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';

interface HomePageListCardProps {
  data: Opportunities;
}
const HomePageListCard = ({ data }: HomePageListCardProps) => {
  return (
    <div className='flex gap-4 mb-10'>
      {data.image && (
        <div className='relative aspect-square w-[25%] shrink-0'>
          <Image
            src={urlFor(data.image).width(500).height(500).url()}
            alt=''
            fill
            className='rounded-md object-cover'
          />
        </div>
      )}

      <div>
        <Link
          href={`details/${data.slug?.current}`}
          className='text-xl font-medium hover:text-primary-100 duration-100 mb-3 inline-block max-w-[80%]'>
          <h3>{data.title}</h3>
        </Link>

        {data.deadline && <p className='text-lg text-gray-600'>Deadline: {new Date(data.deadline).toDateString()}</p>}
      </div>
    </div>
  );
};

export default HomePageListCard;
