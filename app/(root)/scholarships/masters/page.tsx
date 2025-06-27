import OpportunitiesList from '@/components/opportunities-list';
import SearchForm from '@/components/search-form';
import { opportunities } from '@/constants';

export const metadata = {
  title: 'Masters',
};
const MastersPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='bg-section bg-[url(/hero-img.jpg)]'>
        <SearchForm />
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Academics Opportunities'
          limit={8}
          data={opportunities}
          layoutType='flex'
          listType='scholarship'
        />
      </div>
    </section>
  );
};

export default MastersPage;
