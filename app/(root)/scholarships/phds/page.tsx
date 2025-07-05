import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Masters',
};

const PhdPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='bg-section-1 bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='w-full lg:w-[55%]'>Find the Best Undergraduate Scholarships to Start Strong and Graduate Debt-Free</h1>
        </PageHeader>
      </div>

      <div className='container py-2 md:py-4'>
        <OpportunitiesList
          title='Phd Opportunities'
          layoutType='flex'
          listType='scholarship'
          educationLevel='masters'
        />
      </div>
    </section>
  );
};

export default PhdPage;
