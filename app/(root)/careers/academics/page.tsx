import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';
import SearchForm from '@/components/search-form';
import { opportunities } from '@/constants';

export const metadata = {
  title: 'Academics',
};

const AcademicsPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='relative bg-[url(/hero-img.jpg)] bg-cover bg-center bg-no-repeat h-[80vh] w-full mb-10'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='text-white text-3xl md:text-5xl text-center font-medium leading-snug z-10 w-full lg:w-[65%]'>
            Browse Academic Job Openings Across Universities and Research Institutions
          </h1>
          <SearchForm />
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Academics Opportunities'
          limit={8}
          data={opportunities}
          layoutType='flex'
          listType='academic'
        />
      </div>
    </section>
  );
};

export default AcademicsPage;
