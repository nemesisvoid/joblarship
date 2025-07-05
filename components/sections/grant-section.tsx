import HomePageList from '../homepage-list';

const GrantSection = () => {
  return (
    <section className='my-20'>
      <div className='container py-10'>
        <HomePageList
          title='Grants'
          opportunityType='grant'
          loadMoreAmount={4}
        />
      </div>
    </section>
  );
};

export default GrantSection;
