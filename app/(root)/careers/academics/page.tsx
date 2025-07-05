import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';

export const metadata = {
  title: 'Academics',
};

const AcademicsPage = () => {
  return (
    <section className='bg-gray-50 pb-24'>
      <div className='bg-section-1 bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='text-white text-3xl md:text-5xl text-center font-medium leading-snug z-10 w-full lg:w-[60%]'>
            Browse Academic Job Openings Across Universities and Research Institutions
          </h1>
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Academics Opportunities'
          layoutType='flex'
          listType='academic'
          careerLevel='academic'
        />
      </div>
    </section>
  );
};

export default AcademicsPage;
