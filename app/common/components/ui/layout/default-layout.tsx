import React from 'react';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 px-6">{children}</div>;
};
export default DefaultLayout;
