'use client';

import Popup from '@components/popup';
import Footer from '@components/ui/footer';
import { TBottomTab } from '@interfaces/enums';
import useModal from '@hooks/useModal';
import useCustomRouter from '@hooks/useCustomRouter';
import React, { useEffect, useState } from 'react';

const DiaryWritingLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useCustomRouter();
  const { isOpen, onClose, onOpen } = useModal();
  const [route, setRoute] = useState<TBottomTab>('Diary');
  useEffect(() => {
    if (route === 'Home' || route === 'Mypage') {
      onOpen();
    }
  }, [route]);
  return (
    <main className="flex size-full flex-col">
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        label="삭제"
        onClick={() => {
          push('/diarylist');
        }}
        title="정말 작성을 취소하시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">삭제한 일화는 다시 복구할 수 없어요.</p>
      </Popup>
      <div className="flex flex-1 flex-col">{children}</div>
      <div className={`sticky bottom-0 h-[67px]`}>
        <Footer setRoute={setRoute} check={true} />
      </div>
    </main>
  );
};
export default DiaryWritingLayout;