'use client';

import { TDate } from '@interfaces/enums';
import { EmptyDiaryListPage } from '@features/diary/pages';
import useInput from '@hooks/Utils/useInput';
import { useGetDiaryList } from '@hooks/queries/diary';
import { useFriendStore } from '@stores/useFriendStore';
import { ChangeEvent, useState } from 'react';
import { dummyDiaries } from './dummy';
import SearchBar from '@components/search-bar';

import useCustomRouter from '@hooks/useCustomRouter';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { TagButtonsList } from '@features/diary/components';
import Link from 'next/link';
import Diary from './diary';

const DiaryListPage = () => {
  const { push } = useCustomRouter();
  const { text, onChange } = useInput('');
  const { friend } = useFriendStore();
  const [tag, setTag] = useState<string[]>([]);
  const [order, setOrder] = useState<TDate>('desc');
  const { data, isSuccess } = useGetDiaryList({ id: friend.id, order, q: text, tag });

  console.log(tag, order, text);

  const handleSetTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value as TDate);
  };

  //const diaries = data ? data?.pages.flatMap((page) => page.data.diaries) : [];
  const diaries = data ? dummyDiaries : [];

  if (isSuccess && diaries.length === 0) {
    return <EmptyDiaryListPage />;
  }

  return (
    <FooterButtonLayout
      text="일화작성"
      onClick={() => {
        push({ pathname: './writing', query: { step: 1 } });
      }}
    >
      {' '}
      <div className="py-[10px]">
        <SearchBar input={text} setInput={onChange} onClick={() => {}} href="./" />
      </div>
      <TagButtonsList selectTag={tag} setSelectTag={setTag} />
      <DefaultLayout className="mb-6">
        <div className="mb-[2px] mt-[38px] flex justify-between">
          <h5 className="text-caption-1 text-gray-25">총 일화 수 1</h5>
          <select className="text-caption-1 text-gray-30" value={order} onChange={(e) => handleSetTime(e)}>
            <option value={'desc'}>최신순</option>
            <option value={'asc'}>오래된순</option>
          </select>
        </div>
        {dummyDiaries.map((d: any) => (
          <Link href={`./diarylist/${d.id}`} key={d.id}>
            <Diary data={d} />
          </Link>
        ))}
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default DiaryListPage;
