import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Masters',
};

const MastersPage = () => {
  return (
    <section className='bg-gray-50 pb-24'>
      <div className='bg-section-1 bg-[url(/hero-imgs/hero-masters.jpg)]'>
        <div className='bg-overlay' />

        <PageHeader>
          <h1 className='w-full lg:w-[60%]'>Unlock Graduate Scholarships to Advance Your Academic and Career Goals</h1>
        </PageHeader>
      </div>

      <div className='container py-2 md:py-4'>
        <OpportunitiesList
          title='Masters Opportunities'
          layoutType='flex'
          listType='scholarship'
          educationLevel='masters'
        />
      </div>
    </section>
  );
};

export default MastersPage;
