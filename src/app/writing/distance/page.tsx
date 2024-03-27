'use client';

import { ButtonTopBar } from '@components/top-bar';
import { DistanceBookmark, DistanceIsOverDimmer } from '@features/distance/components';
import DistanceCard from '@features/distance/components/card';
import useCustomRouter from '@hooks/useCustomRouter';
import { useSayingStore } from '@stores/useSayingStore';
import { useEffect } from 'react';

const DiaryDistancePage = () => {
  const { push } = useCustomRouter();
  const { saying, isOver, setIsOver } = useSayingStore();

  useEffect(() => {
    if (saying.friendPercentage >= 90 && isOver === 'before') {
      setIsOver('ing');
    }
  }, [isOver]);

  return (
    <>
      {isOver === 'ing' && <DistanceIsOverDimmer />}

      <div className="relative flex flex-1 flex-col">
        <ButtonTopBar
          label="친구와의 거리"
          onClick={() => {
            push('/diarylist');
          }}
          name="닫기"
        />
        <div className="mt-[42px] px-8">
          <DistanceCard />
        </div>
        <div className="mt-14 flex justify-center px-[18px]">
          <DistanceBookmark />
        </div>
      </div>
    </>
  );
};
export default DiaryDistancePage;
