'use client';

import ImageLoader from '@components/imageLoader';
import Image from 'next/image';

const SignInButton = () => {
  return (
    <button
      type="button"
      className="flex h-14 w-full items-center justify-center rounded-xl bg-login text-lg font-semibold not-italic leading-[18px] text-black hover:shadow-lg active:opacity-[0.85]"
    >
      <Image loader={ImageLoader} src={'icon/kakao.png'} alt="" className="mr-2" width={18} height={17} />
      카카오로 시작
    </button>
  );
};
export default SignInButton;
