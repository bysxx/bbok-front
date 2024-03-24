import type { IDiariesItem } from '@interfaces/diary';
import Link from 'next/link';

import DiaryItem from './diary-item';

interface IDiarylistCardProps {
  diaryList: IDiariesItem[];
  search: string;
}
const DiarylistCard = ({ diaryList, search }: IDiarylistCardProps) => {
  return (
    <>
      {diaryList.map((diary) => (
        <Link href={`./diarylist/${diary.id}`} key={diary.id}>
          <DiaryItem {...diary} search={search} />
        </Link>
      ))}
    </>
  );
};
export default DiarylistCard;
