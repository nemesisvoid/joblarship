import SearchList from '@/components/search-list';
import FellowshipSection from '@/components/sections/fellowship-section';
import GrantSection from '@/components/sections/grant-section';
import HeroSection from '@/components/sections/hero-section';
import OpportunitiesSection from '@/components/sections/opportunities-section';
import React from 'react';

const Home = async () => {
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
