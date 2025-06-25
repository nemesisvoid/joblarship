import { fellowships } from '@/constants';
import HomePageList from '../homepage-list';

const GrantSection = () => {
  return (
    <section className='my-20'>
      <div className='container py-10'>
        <HomePageList
          data={fellowships}
          title='Grants'
        />
      </div>
    </section>
  );
};

export default GrantSection;
