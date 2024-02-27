import Footer from '@components/ui/footer';
import React from 'react';

const DiaryWritingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex size-full flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
      <div className={`sticky bottom-0 h-[67px]`}>
        <Footer />
      </div>
    </main>
  );
};
export default DiaryWritingLayout;
