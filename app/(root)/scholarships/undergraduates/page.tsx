import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Undergraduates',
};

const UndergraduatesPage = () => {
  return (
    <section className='bg-gray-50 pb-24'>
      <div className='bg-section-1 bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='w-full lg:w-[55%]'>Unlock Graduate Scholarships to Advance Your Academic and Career Goals</h1>
        </PageHeader>
      </div>

      <div className='container py-2 md:py-4'>
        <OpportunitiesList
          title='Undergraduate Scholarships'
          layoutType='flex'
          listType='scholarship'
          educationLevel='undergraduate'
        />
      </div>
    </section>
  );
};

export default UndergraduatesPage;
