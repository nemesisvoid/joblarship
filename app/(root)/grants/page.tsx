import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

const GrantsPage = () => {
  return (
    <section className=' bg-gray-50 pb-24'>
      <div className='bg-section-1 bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='lg:w-[55%]'>Access Grants That Support Innovation, Education, and Social Impact</h1>
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          layoutType='flex'
          title='Grant Opportunities'
          listType='grant'
        />
      </div>
    </section>
  );
};

export default GrantsPage;
