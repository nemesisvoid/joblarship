import { opportunities } from '@/constants';
import OpportunitiesList from '../opportunities-list';
import { client } from '@/sanity/lib/client';
import { getLatestOpportunities } from '@/sanity/lib/queries';

const OpportunitiesSection = async () => {
  const latestOpportunities = await client.fetch(getLatestOpportunities);
  console.log(latestOpportunities);
  return (
    <section className='container my-20'>
      <OpportunitiesList
        title='Latest Opportunities'
        limit={5}
      />
    </section>
  );
};

export default OpportunitiesSection;
