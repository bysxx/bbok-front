'use client';

import ImageLoader from '@components/imageLoader';
import type { TValueOfCharacter } from '@constants/character';
import { CHARACTER } from '@constants/character';
import cx from 'classnames';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HEART_WIDTH = 32;

interface IFriendProgressBarProps {
  percent: number;
  type?: TValueOfCharacter;
}
const FriendProgressBar = ({ percent, type = 'CACTUS' }: IFriendProgressBarProps) => {
  const fillRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (fillRef.current && imgRef.current) {
      fillRef.current.style.width = `${percent}%`;
      imgRef.current.style.left = `calc(${percent}% - ${HEART_WIDTH / 2}px)`;
    }
  }, [fillRef, imgRef, percent]);

  const style = type === CHARACTER.CACTUS ? 'bg-[rgb(255,204,170)]' : 'bg-green-4';

  return (
    <div className={cx('relative h-3 w-full rounded-full', style)}>
      <div
        ref={fillRef}
        style={{ width: '0px' }}
        className="absolute left-0 top-0 h-3 rounded-full bg-white transition-all duration-1000"
      />
      {percent > 0 && (
        <Image
          ref={imgRef}
          loader={ImageLoader}
          style={{ left: '0px' }}
          className="absolute -top-2.5 transition-all duration-1000"
          src="home/heart.svg"
          alt=""
          width={HEART_WIDTH}
          height={HEART_WIDTH}
        />
      )}
    </div>
  );
};
export default FriendProgressBar;
