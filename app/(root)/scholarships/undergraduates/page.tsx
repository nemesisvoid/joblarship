import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';
import SearchForm from '@/components/search-form';
import { opportunities } from '@/constants';
import React from 'react';

const UndergraduatesPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='relative bg-[url(/hero-img.jpg)] bg-cover bg-center bg-no-repeat h-[80vh] w-full mb-10'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='w-full lg:w-[55%]'>Find the Best Undergraduate Scholarships to Start Strong and Graduate Debt-Free</h1>
          <SearchForm />
        </PageHeader>
      </div>

      <div className='container py-10'>
        <OpportunitiesList
          title='Undergraduate Scholarships'
          limit={8}
          data={opportunities}
          layoutType='flex'
          listType='scholarship'
        />
      </div>
    </section>
  );
};

export default UndergraduatesPage;
