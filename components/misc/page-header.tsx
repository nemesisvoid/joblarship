import React from 'react';

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className='px-4 flex flex-col items-center justify-center h-full'>{children}</div>;
};

export default PageHeader;
