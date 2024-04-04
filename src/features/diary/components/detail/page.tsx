'use client';

import ImageLoader from '@components/imageLoader';
import { NavTopBar } from '@components/top-bar';
import { DIARY_EMOJI } from '@constants/emoji';
import { useGetDiaryDetail } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import { getTime } from '@libs/getTime';
import Image from 'next/image';

import DetailContent from './content';
import TagList from './tags';

const DiaryDetailPage = ({ id }: { id: number }) => {
  const { push } = useCustomRouter();
  const { data } = useGetDiaryDetail(id);

  return (
    <div className="size-full bg-gray-13">
      {data?.data && (
        <>
          <NavTopBar
            onClick={() => {
              push('/diarylist');
            }}
            label={getTime(data?.data.date)}
          />
          <div className="mt-4 flex items-center justify-center">
            {data?.data.emoji && (
              <Image loader={ImageLoader} src={DIARY_EMOJI[data?.data.emoji].select} width={56} height={56} alt="" />
            )}
          </div>
          <div className="mx-6">
            <DetailContent content={data?.data.content} id={id} />
            <TagList tags={data?.data.tags} />
          </div>
        </>
      )}
    </div>
  );
};
export default DiaryDetailPage;
