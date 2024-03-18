'use client';

import { ButtonTopBar } from '@components/top-bar';
import { DistanceBookmark, DistanceCard } from '@features/distance/components';
import useCustomRouter from '@hooks/useCustomRouter';

const DiaryDistancePage = () => {
  const { push } = useCustomRouter();
  return (
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
  );
};
export default DiaryDistancePage;
