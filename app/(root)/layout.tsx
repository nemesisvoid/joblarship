import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
