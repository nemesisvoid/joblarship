import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Industries',
};

const IndustriesPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='bg-section-1 bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='text-white text-3xl md:text-5xl text-center font-medium leading-snug z-10 w-full lg:w-[50%]'>
            Find Industry Job Opportunities That Align With Your Skills and Passion
          </h1>
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Industry Opportunities'
          layoutType='flex'
          listType='academic'
          careerLevel='industry'
        />
      </div>
    </section>
  );
};

export default IndustriesPage;
