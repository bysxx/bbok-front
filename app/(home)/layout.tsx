import Footer from '@components/ui/footer';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${inter.className} flex size-full flex-col bg-yellow`}>
      <div className="flex flex-1 flex-col">{children}</div>
      <div className={`sticky bottom-0 h-[67px]`}>
        <Footer />
      </div>
    </main>
  );
};
export default HomeLayout;
