'use client';

import useHandleDiary from '@features/writing/hooks/useHandleDiary';
import { DiaryTagPage, DiaryWritingPage } from '@features/writing/pages';
import { useGetDiaryDetail } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import { useEffect } from 'react';

const DiaryModifyPage = ({ id }: { id: number }) => {
  const { data, isSuccess } = useGetDiaryDetail(id);
  const { diary, onChangeDiary, onSetDiary } = useHandleDiary();
  const { query } = useCustomRouter();
  const { type } = query;

  useEffect(() => {
    if (data && isSuccess) {
      onSetDiary(data.data);
    }
  }, []);

  return (
    <>
      {!type && <DiaryWritingPage diary={diary} setDiary={onChangeDiary} id={id} type="modify" />}
      {type === 'tag' && (
        <DiaryTagPage tags={diary.tags} setTags={(value) => onChangeDiary('tags', value)} type="modify" />
      )}
    </>
  );
};
export default DiaryModifyPage;
