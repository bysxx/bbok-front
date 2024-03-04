'use client';

import Spinner from '@components/spinner';
import { TDate } from '@constants/enums';
import { EmptyDiaryListPage } from '@features/diary/pages';
import useInput from '@hooks/Utils/useInput';
import { useGetDiaryList } from '@hooks/queries/diary';
import { useFriendStore } from '@stores/useFriendStore';
import { useState } from 'react';
import { diaries } from './dummy';

const DiaryListPage = () => {
  const { text, onChange } = useInput('');
  const { friend } = useFriendStore();
  const [tag, setTag] = useState<string[]>([]);
  const [order, setOrder] = useState<TDate>('desc');
  const { data, isFetchingNextPage, hasNextPage } = useGetDiaryList({ id: friend.id, order, q: text, tag });

  const diaries = data ? data?.pages.flatMap((page) => page.data.diaries) : [];

  return (
    <>
      {diaries.length === 0 && <EmptyDiaryListPage />}
    </>
  );
};
export default DiaryListPage;
