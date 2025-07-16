import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Fellowships',
};

const FellowshipsPage = () => {
  return (
    <section className='bg-gray-50 pb-24'>
      <div className='bg-section-1 bg-[url(/hero-imgs/hero-fellowship.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='w-full lg:w-[55%]'>Discover Prestigious Fellowships to Grow Professionally and Academically</h1>
        </PageHeader>
      </div>

      <div className='container py-2 md:py-4'>
        <OpportunitiesList
          title='Fellowship Programmes'
          layoutType='flex'
          listType='fellowship'
        />
      </div>
    </section>
  );
};

export default FellowshipsPage;
