'use client';

import ImageLoader from '@components/imageLoader';
import { NavTopBar } from '@components/top-bar';
import useCustomRouter from '@hooks/useCustomRouter';
import { copyClipboard } from '@libs/copyClipboard';
import Image from 'next/image';

const MyPageServicePage = () => {
  const { push } = useCustomRouter();
  return (
    <div className="size-full">
      <NavTopBar label="서비스 문의" onClick={() => push('/mypage')} />
      <div className="flex h-[calc(100%-134px)] flex-col items-center justify-center">
        <Image loader={ImageLoader} src={'illustration/letter.svg'} width={148} height={122} alt="" />
        <h1 className="text-body-2 mt-3 text-gray-60">서비스 문의는 아래 이메일로 보내주세요</h1>
        <h3 className="mb-[18px] mt-9 text-base font-medium text-gray-55">bbok_stoploss@gmail.com</h3>
        <button
          className="rounded-md bg-gray-15 px-2 py-[5px] text-sm font-medium text-gray-50"
          onClick={() => copyClipboard('bbok_stoploss@gmail.com')}
        >
          복사
        </button>
      </div>
    </div>
  );
};
export default MyPageServicePage;
