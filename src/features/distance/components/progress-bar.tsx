'use client';

import { Tooltip } from '@chakra-ui/react';
import ImageLoader from '@components/imageLoader';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HEART_WIDTH = 32;

interface IDistanceProgressBarProps {
  percent: number;
}
const DistanceProgressBar = ({ percent }: IDistanceProgressBarProps) => {
  const fillRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (fillRef.current && imgRef.current) {
      fillRef.current.style.width = `${percent}px`;
      imgRef.current.style.left = `${percent - HEART_WIDTH / 2}px`;
    }
  }, [fillRef, imgRef, percent]);

  return (
    <>
      <div className="relative flex w-full flex-col">
        <div className="h-3 rounded-full bg-[#FFCCAA]">
          <div
            ref={fillRef}
            style={{ width: '0px' }}
            className="absolute left-0 top-0 h-3 rounded-full bg-orange-1 transition-all duration-1000"
          />
          {percent > 0 && (
            <Tooltip hasArrow label="100m" bg="#FF802D" color="white" isOpen={true} placement="top">
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
            </Tooltip>
          )}
        </div>

        <div className="mt-1 flex items-center justify-between">
          <h1 className="text-[10px] font-medium text-gray-40">0m</h1>
          <h1 className="text-[10px] font-medium text-gray-40">100m</h1>
        </div>
      </div>
    </>
  );
};
export default DistanceProgressBar;
