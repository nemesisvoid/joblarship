import SearchList from '@/components/search-list';
import FellowshipSection from '@/components/sections/fellowship-section';
import GrantSection from '@/components/sections/grant-section';
import HeroSection from '@/components/sections/hero-section';
import OpportunitiesSection from '@/components/sections/opportunities-section';
import { fetchPaginatedOpportunities } from '@/sanity/lib/queries';
import React from 'react';

const Home = async () => {
  const data = await fetchPaginatedOpportunities();
  console.log(data);
  return (
    <div>
      <HeroSection />
      <SearchList />
      <OpportunitiesSection />
      <FellowshipSection />
      <GrantSection />
    </div>
  );
};

export default Home;
