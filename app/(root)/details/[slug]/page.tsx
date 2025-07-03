import { client } from '@/sanity/lib/client';
import { Opportunities } from '@/sanity/types';

import { getOpportunityBySlug } from '@/sanity/lib/queries';
import Details from './details';

const DetailsPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const data: Opportunities = await client.fetch(getOpportunityBySlug, { slug });

  return (
    <section className='bg-gray-50 py-4'>
      <div className='container my-20'>
        <Details data={data} />
      </div>
    </section>
  );
};

export default DetailsPage;
