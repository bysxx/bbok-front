import Link from 'next/link';
import type { ChangeEvent } from 'react';

import Diary from './diary';
import { diaries } from './dummy';

interface DiaryListProps {
  time: string;
  setTime: (e: ChangeEvent<HTMLSelectElement>) => void;
  tags: string[];
  input: string;
}
const DiaryList = ({ time, setTime, tags, input }: DiaryListProps) => {
  console.log(time, tags, input);
  //  여기서 time, tags, input 으로 통신을 하면 됨
  return (
    <div className="px-6">
      <div className="mb-[2px] mt-[38px] flex justify-between">
        <h5 className="text-caption-1 text-gray-25">총 일화 수 1</h5>
        <select className="text-caption-1 text-gray-30" value={time} onChange={(e) => setTime(e)}>
          <option value={'desc'}>최신순</option>
          <option value={'asc'}>오래된순</option>
        </select>
      </div>

      {diaries.map((d: any) => (
        <Link href={`./diarylist/${d.id}`} key={d.id}>
          <Diary data={d} />
        </Link>
      ))}
    </div>
  );
};
export default DiaryList;
