import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Others',
};

const OthersPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='bg-section-1 bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='text-white text-3xl md:text-5xl text-center font-medium leading-snug z-10 w-full md:w-[50%]'>
            Explore Unique Job Opportunities Beyond the Traditional Career Paths
          </h1>
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Other Opportunities'
          layoutType='flex'
          listType='academic'
          careerLevel='others'
        />
      </div>
    </section>
  );
};

export default OthersPage;
