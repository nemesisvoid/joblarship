import { client } from '@/sanity/lib/client';
import { Opportunities } from '@/sanity/types';

import { getOpportunityBySlug } from '@/sanity/lib/queries';
import Details from './details';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data: Opportunities = await client.fetch(getOpportunityBySlug, { slug: params.slug });

  return {
    title: data.title,
    description: data.shortdesc,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://joblarship.com/details/${params.slug}`,
      type: 'website',
      images: [
        {
          url: data.image, // Make sure it's a full image URL
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

const DetailsPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const data: Opportunities = await client.fetch(getOpportunityBySlug, { slug });

  return (
    <section className='bg-gray-50 py-4'>
      <div className='container mt-10 my-20'>
        <Details data={data} />
      </div>
    </section>
  );
};

export default DetailsPage;
