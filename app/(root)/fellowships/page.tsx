import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';
import SearchForm from '@/components/search-form';
import { opportunities } from '@/constants';

export const metadata = {
  title: 'Academics',
};

const FellowshipsPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='bg-section bg-[url(/hero-img.jpg)]'>
        <PageHeader>
          <h1></h1>
          <SearchForm />
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Fellowship Programmes'
          limit={8}
          data={opportunities}
          layoutType='flex'
          listType='fellowship'
        />
      </div>
    </section>
  );
};

export default FellowshipsPage;
