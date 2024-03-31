'use client';

import Tooltip from '@components/tooltip';
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

      <div className="size-full">
        <div className="h-[calc(100%-157px)]">
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
        </div>
        <div className="flex w-full justify-center px-[18px]">
          <Tooltip
            label="마이페이지에서 볼수 있어요"
            position="top-right"
            className="w-full"
            gab={-11}
            alwaysShow={false}
            duration={6}
            delay={4}
          >
            <DistanceBookmark />
          </Tooltip>
        </div>
      </div>
    </>
  );
};
export default DiaryDistancePage;
