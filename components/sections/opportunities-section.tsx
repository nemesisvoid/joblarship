import { opportunities } from '@/constants';
import OpportunitiesList from '../opportunities-list';

const OpportunitiesSection = () => {
  return (
    <section className='container my-20'>
      <OpportunitiesList
        title='Latest Opportunities'
        data={opportunities}
        limit={5}
      />
    </section>
  );
};

export default OpportunitiesSection;
