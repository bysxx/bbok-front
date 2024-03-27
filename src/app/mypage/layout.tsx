'use client';

import Footer from '@components/ui/footer';
import useCustomRouter from '@hooks/useCustomRouter';
import type { PropsWithChildren } from 'react';
import React from 'react';

const MyPageLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useCustomRouter();

  return (
    <main className="flex size-full flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
      {pathname === '/mypage' && (
        <div className={`sticky bottom-0 h-[67px]`}>
          <Footer />
        </div>
      )}
    </main>
  );
};
export default MyPageLayout;
