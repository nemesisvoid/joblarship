import PageHeader from '../misc/page-header';
import SearchForm from '../search-form';

const HeroSection = () => {
  return (
    <section className='relative bg-[url(/hero-img.jpg)] h-screen md:h-[80vh] bg-cover bg-no-repeat mb-10'>
      <div className='bg-overlay' />
      <PageHeader>
        <h1 className='lg:w-[65%]'>Find Jobs, Scholarships, Grants Opportunities to Kickstart Your Future</h1>
        <SearchForm />
      </PageHeader>
    </section>
  );
};

export default HeroSection;
