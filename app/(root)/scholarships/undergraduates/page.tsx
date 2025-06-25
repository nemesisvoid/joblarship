import PageHeader from '@/components/misc/page-header';
import OpportunitiesList from '@/components/opportunities-list';
import SearchForm from '@/components/search-form';
import { opportunities } from '@/constants';
import React from 'react';

const UndergraduatesPage = () => {
  return (
    <section className='bg-gray-50'>
      <div className='bg-section bg-[url(/hero-img.jpg)] w-full  md:h-[80vh] lg:h-[70vh]'>
        <div className='bg-overlay' />
        <PageHeader>
          <h1 className='text-white text-3xl md:text-5xl text-center font-medium leading-snug z-10 w-full lg:w-[55%]'>
            Access Grants That Support Innovation, Education, and Social Impact
          </h1>
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
