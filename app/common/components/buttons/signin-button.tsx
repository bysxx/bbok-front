import Image from 'next/image';

import kakao from '../../../../public/images/icon/kakao.png';

interface SignInProps {
  onClick?: () => void;
}

const SignInButton = ({ onClick }: SignInProps) => {
  return (
    <button
      type="button"
      className="bg-login flex w-[326px] items-center justify-center text-black h-14 rounded-xl font-semibold text-lg leading-[18px] not-italic"
      onClick={onClick}
    >
      <Image src={kakao} alt="" className="mr-2" />
      카카오로 시작
    </button>
  );
};
export default SignInButton;
