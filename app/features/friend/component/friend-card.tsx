import Image from 'next/image';

import FriendProgressBar from './progress-bar';

interface IFriendCardProps {
  countingDiary: number;
  startedAt: Date;
  name: string;
  score: number;
  active: boolean;
}
export default function FriendCard() {
  return (
    <div className=" min-w-[250px] rounded-3xl border-2 border-orange-4 bg-orange-3 px-4 pb-6 pt-[18px] shadow-friend-card">
      <div className="relative flex flex-col items-center gap-6 text-white">
        <div className="absolute left-0 top-0 flex items-center gap-0.5">
          <Image src={'/images/home/card-diary.svg'} alt="" width={20} height={20} />
          <span className="text-friend-card-head leading-none">3</span>
        </div>

        <h2 className="text-friend-card-head">13일째 작성중</h2>

        <figure className="size-[102px] rounded-full bg-white p-2.5">
          <Image src={'/images/illustration/large-kaka.svg'} alt="" width={102} height={102} />
        </figure>

        <div className="text-friend-card-name rounded-[38px] bg-white px-3.5 py-2 text-gray-65">
          닉네임최대열두자입니다아
        </div>

        <FriendProgressBar percent={100} />

        <p className="text-friend-card-desc text-center">
          카드를 눌러
          <br /> 일화를 작성하세요
        </p>
      </div>
    </div>
  );
}
