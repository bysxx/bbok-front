'use client';

import Image from 'next/image';

import kakao from '../../../../public/images/icon/kakao.png';

const SignInButton = () => {
  return (
    <button
      type="button"
      className="flex h-14 w-full items-center justify-center rounded-xl bg-login text-lg font-semibold not-italic leading-[18px] text-black hover:shadow-lg active:opacity-[0.85]"
    >
      <Image src={kakao} alt="" className="mr-2" />
      카카오로 시작
    </button>
  );
};
export default SignInButton;
