import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';
import SearchForm from '@/components/search-form';
import { opportunities } from '@/constants';
import React from 'react';

const GrantsPage = () => {
  return (
    <section className=' bg-gray-50'>
      <div className='bg-section bg-[url(/hero-img.jpg)]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='lg:w-[55%]'>Access Grants That Support Innovation, Education, and Social Impact</h1>
          <SearchForm />
        </PageHeader>
      </div>

      <div className='container'>
        <OpportunitiesList
          limit={4}
          data={opportunities}
          layoutType='flex'
          title='Grant Opportunities'
          listType='grant'
        />
      </div>
    </section>
  );
};

export default GrantsPage;
