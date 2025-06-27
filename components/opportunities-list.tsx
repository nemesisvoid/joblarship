import { OpportunityType } from '@/types';
import OpportunityCard from './opportunity-card';
import GrantCard from './misc/grant-card';
import CareerCard from './/misc/career-card.tsx';
import ScholarshipCard from './misc/scholarship-card';
import FellowshipCard from './misc/fellowship-card';

interface OpportunitiesListProps {
  data: OpportunityType[];
  title: string;
  limit: number;
  layoutType?: 'grid' | 'flex';
  listType?: 'career' | 'scholarship' | 'fellowship' | 'academic' | 'grant';
}
const OpportunitiesList = ({ data, title, limit = 6, layoutType = 'grid', listType }: OpportunitiesListProps) => {
  const slicedData = data.slice(0, limit);
  if (!slicedData || slicedData.length === 0)
    return (
      <div className='flex items-center justify-center h-64'>
        <p>Data not available</p>
      </div>
    );
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-4xl font-medium mb-12'>{title}</h2>
      </div>

      <div className={`${layoutType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-8'}`}>
        {!listType &&
          slicedData.map((item, i) => (
            <OpportunityCard
              data={item}
              key={i}
            />
          ))}

        {listType === 'grant' &&
          slicedData.map((item, i) => (
            <GrantCard
              data={item}
              key={i}
            />
          ))}

        {listType === 'academic' &&
          slicedData.map((item, i) => (
            <CareerCard
              data={item}
              key={i}
            />
          ))}

        {listType === 'fellowship' &&
          slicedData.map((item, i) => (
            <FellowshipCard
              data={item}
              key={i}
            />
          ))}

        {listType === 'scholarship' &&
          slicedData.map((item, i) => (
            <ScholarshipCard
              data={item}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

export default OpportunitiesList;
