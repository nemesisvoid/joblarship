import { client } from '@/sanity/lib/client';
import { Opportunities } from '@/sanity/types';

import { getOpportunityBySlug } from '@/sanity/lib/queries';
import Details from './details';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data: Opportunities = await client.fetch(getOpportunityBySlug, { slug: params.slug });

  const siteUrl = 'https://joblarship.com';
  const defaultImage = `${siteUrl}/logo.png`;

  return {
    title: data.title,
    description: data.shortdesc,
    openGraph: {
      title: data.title,
      url: `${siteUrl}/details/${params.slug}`,
      type: 'website',
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      images: [defaultImage],
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
