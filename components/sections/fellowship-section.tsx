import HomePageList from '../homepage-list';

const FellowshipSection = () => {
  return (
    <section className='bg-gray-100'>
      <div className='container py-2 md:py-4'>
        <HomePageList
          loadMoreAmount={4}
          title='Fellowships'
          opportunityType='fellowship'
        />
      </div>
    </section>
  );
};

export default FellowshipSection;
