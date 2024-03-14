'use client';

import SearchBar from '@components/search-bar';
import Spinner from '@components/spinner';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { DATE_SELECT } from '@constants/date';
import { DiaryItem } from '@features/diary/components';
import { EmptyDiaryListPage } from '@features/diary/pages';
import { useGetDiaryList } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import { DateOption, type TDate } from '@interfaces/enums';
import { useFriendStore } from '@stores/useFriendStore';
import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

const DiaryListPage = () => {
  const { push } = useCustomRouter();
  const { text, onChange } = useInput('');
  const { friend } = useFriendStore();
  const [tag, setTag] = useState<string>('');
  const [order, setOrder] = useState<TDate>('desc');
  const { data, isSuccess, isFetchingNextPage, hasNextPage } = useGetDiaryList({ id: friend.id, order, q: text, tag });

  const handleSetTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value as TDate);
  };

  const diaryList = data?.pages ? data.pages.flatMap((page) => page.data.diaries) : [];

  if (isSuccess && diaryList.length === 0 && text === '' && tag === '') {
    return <EmptyDiaryListPage />;
  }

  return (
    <FooterButtonLayout
      text="일화작성"
      onClick={() => {
        push({ pathname: './writing', query: { step: 1 } });
      }}
    >
      <div className="py-[10px]">
        <SearchBar input={text} setInput={onChange} onClick={() => {}} href="./" />
      </div>
      {/* <TagButtonsList selectTag={tag} setSelectTag={setTag} /> */}
      {/* {isLoading && <LoadingPage />} */}
      <DefaultLayout className="mb-6">
        <div className="mb-[2px] mt-[38px] flex justify-between">
          <h5 className="text-caption-1 text-gray-25">총 일화 수 {diaryList.length}</h5>
          <select className="text-caption-1 text-gray-30" value={order} onChange={(e) => handleSetTime(e)}>
            <option value={DateOption.desc}>{DATE_SELECT[DateOption.desc]}</option>
            <option value={DateOption.asc}>{DATE_SELECT[DateOption.asc]}</option>
          </select>
        </div>
        {diaryList.map((diary) => (
          <Link href={`./diarylist/${diary.id}`} key={diary.id}>
            <DiaryItem data={diary} />
          </Link>
        ))}
        {(isFetchingNextPage || hasNextPage) && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default DiaryListPage;
