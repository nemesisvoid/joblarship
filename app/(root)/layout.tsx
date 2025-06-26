import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
