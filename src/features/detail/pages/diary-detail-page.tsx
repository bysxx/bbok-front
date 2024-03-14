'use client';

import { NavTopBar } from '@components/top-bar';
import useCustomRouter from '@hooks/useCustomRouter';
import { getTime } from '@libs/getTime';
import { diary } from 'src/app/diarylist/dummy';

import { DetailContent, TagList } from '../components';

const DiaryDetail = ({ id }: { id: number }) => {
  const { push } = useCustomRouter();
  const diaryDate = getTime(diary.date);
  console.log(id);
  return (
    <div className="size-full bg-gray-13">
      <NavTopBar onClick={() => push('./')} label={diaryDate} />
      <div className="mt-4 flex items-center justify-center">
        <img src="../images/emoji/emoji3.svg" alt="" />
      </div>
      <div className="mx-6">
        <DetailContent content={diary.content} id={id} />
        <TagList />
      </div>
    </div>
  );
};
export default DiaryDetail;
