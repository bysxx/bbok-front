'use client';

import { NavTopBar } from '@components/top-bar';
import { useGetDiaryDetail } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import { getTime } from '@libs/getTime';
import Image from 'next/image';

import DetailContent from './content';
import TagList from './tags';

const DiaryDetailPage = ({ id }: { id: number }) => {
  const { push } = useCustomRouter();
  const { data } = useGetDiaryDetail(id);
  const diaryDate = getTime(data?.data.date!);

  return (
    <div className="size-full bg-gray-13">
      <NavTopBar
        onClick={() => {
          push('/diarylist');
        }}
        label={diaryDate}
      />
      <div className="mt-4 flex items-center justify-center">
        <Image src={data?.data.emojiUrl!} width={56} height={56} alt="" />
      </div>
      <div className="mx-6">
        <DetailContent content={data?.data.content!} id={id} />
        <TagList tags={data?.data.tags!} />
      </div>
    </div>
  );
};
export default DiaryDetailPage;