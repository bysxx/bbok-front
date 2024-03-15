'use client';

import useHandleDiary from '@features/writing/hooks/useHandleDiary';
import { DiaryWritingPage } from '@features/writing/pages';
import { useGetDiaryDetail } from '@hooks/queries/diary';
import { useEffect } from 'react';

const DiaryModifyPage = ({ id }: { id: number }) => {
  const { data, isSuccess } = useGetDiaryDetail(id);
  const { diary, onChangeDiary, onSetDiary } = useHandleDiary();

  useEffect(() => {
    if (data && isSuccess) {
      onSetDiary(data.data);
    }
  }, []);

  return <DiaryWritingPage diary={diary} setDiary={onChangeDiary} id={id} type="modify" />;
};
export default DiaryModifyPage;
