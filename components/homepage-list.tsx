import { Button } from './ui/button';
import HomePageListCard from './homepage-list-card';
import { OpportunityType } from '@/types';

interface HomePageListProps {
  data: OpportunityType[];
  title: string;
  limit?: number;
}
const HomePageList = ({ data, title, limit = 4 }: HomePageListProps) => {
  const slicedData = data.slice(0, limit);
  if (!slicedData || slicedData.length === 0)
    return (
      <div className='flex items-center justify-center h-64'>
        <p>Data not available</p>
      </div>
    );
  return (
    <div>
      <h2 className='text-3xl font-medium mb-12'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {slicedData.map((item, i) => (
          <HomePageListCard
            data={item}
            key={i}
          />
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <Button className='text-lg bg-white text-black py-7 w-full md:w-1/3 mt-10 rounded-md border border-gray-600 hover:text-white hover:bg-black duration-300 cursor-pointer'>
          Load More
        </Button>
      </div>
    </div>
  );
};

export default HomePageList;
