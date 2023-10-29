import type { ChangeEvent } from 'react';

import Diary from './diary';

interface DiaryListProps {
  time: string;
  setTime: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const DiaryList = ({ time, setTime }: DiaryListProps) => {
  return (
    <div className="px-6">
      <div className="mb-[2px] mt-[38px] flex justify-between">
        <h5 className="text-caption-1 text-gray-25">총 일화 수 1</h5>
        <select className="text-caption-1 text-gray-30" value={time} onChange={(e) => setTime(e)}>
          <option value={'최신순'}>최신순</option>
          <option value={'오래된순'}>오래된순</option>
        </select>
      </div>

      <Diary />
      <Diary />
      <Diary />
      <Diary />
      <Diary />
      <Diary />
    </div>
  );
};
export default DiaryList;
