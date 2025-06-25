import { fellowships } from '@/constants';
import HomePageList from '../homepage-list';

const FellowshipSection = () => {
  return (
    <section className='bg-gray-100'>
      <div className='container py-10'>
        <HomePageList
          data={fellowships}
          title='Fellowships'
        />
      </div>
    </section>
  );
};

export default FellowshipSection;
