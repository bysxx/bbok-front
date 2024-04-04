'use client';

import { ButtonTopBar } from '@components/top-bar';
import { DefaultLayout } from '@components/ui/layout';
import {
  WritingDateForm,
  WritingFriendForm,
  WritingTagsList,
  WritingTextForm,
} from '@features/diary/components/writing';
import type { IDiaryContextBody } from '@features/diary/contexts/type';
import { getDiaryCheckList } from '@features/diary/utils/get-diary-checklist';
import { useDiaryMutation, useGetDiaryDetail } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import { useFormContext } from 'react-hook-form';

interface IDiaryDetailModifyProp {
  params: {
    id: number;
  };
}

const DiaryDetailModifyPage = ({ params }: IDiaryDetailModifyProp) => {
  const { data } = useGetDiaryDetail(params.id);
  const { push } = useCustomRouter();
  const { patchDiary } = useDiaryMutation();
  const { getValues } = useFormContext<IDiaryContextBody>();

  const handleModifyDiary = () => {
    const { tags, content, date } = getValues();
    patchDiary.mutate({
      tags,
      content,
      date,
      emoji: data?.data.emoji || 'ANGRY',
      checklist: getDiaryCheckList(data?.data.badChecklist || [], data?.data.goodChecklist || []),
      sticker: '',
      id: params.id,
    });

    push(`/diarylist/${params.id}`);
  };

  return (
    <>
      <ButtonTopBar label={'일화 수정'} onClick={handleModifyDiary} name={'완료'} />
      {data?.data && (
        <DefaultLayout>
          <WritingFriendForm />
          <WritingDateForm defaultValue={data?.data.date} />
          <WritingTextForm defaultValue={data?.data.content} />
          <WritingTagsList defaultValue={data?.data.tags} />
        </DefaultLayout>
      )}
    </>
  );
};
export default DiaryDetailModifyPage;
