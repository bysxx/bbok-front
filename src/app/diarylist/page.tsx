'use client';

import SearchBar from '@components/search-bar';
import Spinner from '@components/spinner';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { DiarylistCard, DiarylistOption, EmptyDiarylistCard, TagButtonsList } from '@features/diary/components';
import { EmptyDiaryListPage } from '@features/diary/pages';
import { useGetDiaryList } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import { type TDate } from '@interfaces/enums';
import { useFriendStore } from '@stores/useFriendStore';
import { useState } from 'react';

const DiaryListPage = () => {
  const { push } = useCustomRouter();
  const { text, onChange } = useInput('');
  const { friend } = useFriendStore();
  const [tag, setTag] = useState<string>('');
  const [order, setOrder] = useState<TDate>('desc');
  const { data, isSuccess, isFetchingNextPage } = useGetDiaryList({
    id: friend.id,
    order,
    q: text,
    tag,
  });
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
      <TagButtonsList selectTag={tag} setSelectTag={setTag} />
      <DefaultLayout className="mb-6">
        <DiarylistOption length={diaryList.length} order={order} setOrder={setOrder} />
        {diaryList.length === 0 ? <EmptyDiarylistCard /> : <DiarylistCard diaryList={diaryList} search={text} />}

        {isFetchingNextPage && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default DiaryListPage;
