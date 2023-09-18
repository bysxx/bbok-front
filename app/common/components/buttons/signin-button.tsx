import Image from 'next/image';

import kakao from '../../../../public/images/icon/kakao.png';

interface SignInProps {
  onClick?: () => void;
}

const SignInButton = ({ onClick }: SignInProps) => {
  return (
    <button
      type="button"
      className="flex h-14 w-[326px] items-center justify-center rounded-xl bg-login text-lg font-semibold not-italic leading-[18px] text-black hover:shadow-lg active:opacity-[0.85]"
      onClick={onClick}
    >
      <Image src={kakao} alt="" className="mr-2" />
      카카오로 시작
    </button>
  );
};
export default SignInButton;
