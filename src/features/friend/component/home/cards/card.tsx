import ImageLoader from '@components/imageLoader';
import { FRIEND_CHARACTER } from '@constants/character';
import { FRIEND_CHARACTER_STYLE } from '@features/friend/constants';
import useCustomRouter from '@hooks/useCustomRouter';
import type { Friend } from '@interfaces/friend';
import { getSinceTime } from '@libs/getTime';
import cx from 'classnames';
import Image from 'next/image';

import FriendProgressBar from './progress-bar';

const FriendCard = (data: Friend) => {
  const { countingDiary, startedAt, name, score, active, characterType } = data;
  const { push } = useCustomRouter();
  return (
    <div
      className={cx(
        'min-w-[250px] rounded-3xl border-2 px-4 pb-6 pt-[18px] shadow-friend-card',
        FRIEND_CHARACTER_STYLE[characterType].style,
        'cursor-pointer',
      )}
      onClick={() => {
        if (active && countingDiary === 0) {
          push('/writing/emoji');
        }
      }}
    >
      <div className="relative flex flex-col items-center gap-6 text-white">
        <div className="absolute left-0 top-0 flex items-center gap-0.5">
          <Image loader={ImageLoader} src={'home/card-diary.svg'} alt="" width={20} height={20} />

          <span className="text-friend-card-head leading-none">{countingDiary}</span>
        </div>

        {(() => {
          if (!active) {
            return <h2 className="text-friend-card-head">관계 정리 완료</h2>;
          }
          if (countingDiary === 0) {
            return <h2 className="text-friend-card-head">일화 미작성</h2>;
          }
          return <h2 className="text-friend-card-head">{getSinceTime(startedAt)}일째 작성중</h2>;
        })()}

        <figure className="size-[102px] rounded-full bg-white p-2.5">
          <Image loader={ImageLoader} src={FRIEND_CHARACTER[characterType].selected} alt="" width={102} height={102} />
        </figure>

        <div className="text-friend-card-name rounded-[38px] bg-white px-3.5 py-2 text-gray-65">{name}</div>

        <FriendProgressBar type={characterType} percent={score} />

        {(() => {
          if (!active) {
            return (
              <p className="text-friend-card-desc text-center">
                관계정리가 완료된
                <br /> 일기장이에요
              </p>
            );
          }
          if (countingDiary === 0) {
            return (
              <p className="text-friend-card-desc text-center">
                카드를 눌러
                <br /> 일화를 작성하세요
              </p>
            );
          }
          return (
            <p className="text-friend-card-desc text-center">
              나와 {score}m 정도
              <br /> 멀어지고 있어요
            </p>
          );
        })()}
      </div>
    </div>
  );
};
export default FriendCard;
