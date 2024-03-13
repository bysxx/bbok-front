'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HEART_WIDTH = 32;

export default function FriendProgressBar({ percent }: { percent: number }) {
  const fillRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (fillRef.current && imgRef.current) {
      fillRef.current.style.width = `${percent}px`;
      imgRef.current.style.left = `${percent - HEART_WIDTH / 2}px`;
    }
  }, [fillRef, imgRef, percent]);

  return (
    <div className="relative h-3 w-full rounded-full bg-[rgb(255,204,170)]">
      <div
        ref={fillRef}
        style={{ width: '0px' }}
        className="absolute left-0 top-0 h-3 rounded-full bg-white transition-all duration-1000"
      />
      {percent > 0 && (
        <Image
          ref={imgRef}
          style={{ left: '0px' }}
          className="absolute -top-2.5 transition-all duration-1000"
          src="/images/home/heart.svg"
          alt=""
          width={HEART_WIDTH}
          height={HEART_WIDTH}
        />
      )}
    </div>
  );
}
