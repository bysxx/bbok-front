import Link from 'next/link';

import DiaryItem from './diary-item';
import { IDiariesItem } from '@interfaces/diary';

const DiarylistCard = ({ diaryList }: { diaryList: IDiariesItem[] }) => {
  return (
    <>
      {diaryList.map((diary) => (
        <Link href={`./diarylist/${diary.id}`} key={diary.id}>
          <DiaryItem {...diary} />
        </Link>
      ))}
    </>
  );
};
export default DiarylistCard;
