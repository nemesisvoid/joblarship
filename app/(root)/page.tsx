import FellowshipSection from '@/components/sections/fellowship-section';
import GrantSection from '@/components/sections/grant-section';
import HeroSection from '@/components/sections/hero-section';
import OpportunitiesSection from '@/components/sections/opportunities-section';
import React from 'react';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OpportunitiesSection />
      <FellowshipSection />
      <GrantSection />
    </div>
  );
};

export default Home;
