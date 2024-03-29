'use client';

import Footer from '@components/ui/footer';
import { TooltipFooter } from '@features/friend/component/home';
import { useCheckVisitedStore } from '@stores/useCheckVisitedStore';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const HomeLayout = ({ children }: PropsWithChildren) => {
  const { isCheckDiary } = useCheckVisitedStore();
  return (
    <main className={`${inter.className} flex size-full flex-col bg-yellow`}>
      <div className="flex flex-1 flex-col">{children}</div>
      <div className={`sticky bottom-0 h-[67px]`}>{isCheckDiary ? <Footer /> : <TooltipFooter focusTab="Diary" />}</div>
    </main>
  );
};
export default HomeLayout;
