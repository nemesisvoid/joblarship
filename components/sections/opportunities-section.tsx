import OpportunitiesList from '../opportunities-list';

const OpportunitiesSection = async () => {
  return (
    <section className='container my-20'>
      <OpportunitiesList
        title='Latest Opportunities'
        filterButton={true}
      />
    </section>
  );
};

export default OpportunitiesSection;
