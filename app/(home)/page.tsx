'use client';

import { EtcButton, RoundButton } from '@components/etc-buttons';
import { DiaryTopBar } from '@components/top-bar';
import Footer from '@components/ui/footer';
import ModalFooter from '@components/ui/modal-footer';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

import FriendCard from './friends/friend-card';
import LockedFriendCard from './friends/locked-friend-card';

const inter = Inter({ subsets: ['latin'] });

const MainPage = () => {
  const [modalButton, setModalButton] = useState(true);
  const [modalWrite, setModalWrite] = useState(false);

  const closeButtonModal = () => {
    setModalButton(false);
    setModalWrite(true);
  };
  const closeWriteModal = () => {
    setModalWrite(false);
    setModalButton(false);
  };

  return (
    <>
      {modalButton && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-gray-70 opacity-80" onClick={closeButtonModal} />
      )}
      {modalWrite && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-gray-70 opacity-80" onClick={closeWriteModal} />
      )}

      <main className={`${inter.className} flex h-full w-full flex-col bg-yellow`}>
        <div className="flex flex-1 flex-col">
          <DiaryTopBar label={'MY일기장'} settingClick={() => {}} />
          <div className="flex gap-4 overflow-scroll px-9 py-4">
            <FriendCard />
            <LockedFriendCard />
          </div>
          <div className="mx-9 mt-9 rounded-3xl bg-white pb-[53px] pt-[51px]">
            <div className="flex flex-col items-center justify-center">
              <img src={'/images/illustration/empty-state-kaka.svg'} alt="" />
              <h1 className="mt-5 text-base font-bold text-gray-65">등록된 친구가 아직 없어요!</h1>
              <h5 className="text-caption-1 mt-3 flex items-center justify-center text-gray-40">
                친구를 등록하고 일화를 작성하여
              </h5>
              <h5 className="text-caption-1 mb-[17px] text-gray-40">생각을 정리해 보세요</h5>

              {/* tooltip 자리 */}
              <div className={`${modalButton ? 'z-20' : ''} flex flex-col items-center justify-center`}>
                {modalButton && (
                  <div className="absolute z-20 mb-20 h-[51px] bg-orange-1">
                    <h5>먼저 친구를 생성해보세요 tooltip 자리</h5>
                  </div>
                )}
                <Link href={'./friend'}>
                  <RoundButton type="orange" onClick={() => {}} label="친구 생성" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-6 mt-[53px]">
            <Link href={'./criteria'}>
              <EtcButton type="friend" onClick={() => {}} />
            </Link>
          </div>
        </div>

        {/* 하단 footer */}
        {modalWrite ? (
          <ModalFooter />
        ) : (
          <div className={`sticky bottom-0 h-[67px]`}>
            <Footer />
          </div>
        )}
      </main>
    </>
  );
};
export default MainPage;
