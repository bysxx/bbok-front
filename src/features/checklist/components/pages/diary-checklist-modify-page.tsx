'use client';

import { NavTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import { ChecklistTabPage } from '@features/checklist/components/organisms';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import useHandleDiary from '@features/writing/hooks/useHandleDiary';
import { getDiaryChecklist } from '@features/writing/utils/get-diary-checklist';
import { useDiaryMutation, useGetDiaryDetail } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import { ICheckItem } from '@interfaces/checklist';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useEffect } from 'react';

const DiaryChecklistModifyPage = ({ id }: { id: number }) => {
  const { back, query, push } = useCustomRouter();
  const { data, isSuccess } = useGetDiaryDetail(id);
  const { diary, onSetDiary, goodChecklist, setGoodChecklist, badChecklist, setBadChecklist } = useHandleDiary();
  const { patchDiary } = useDiaryMutation();
  const { type } = query as { type: TQuery };

  useEffect(() => {
    if (data && isSuccess) {
      onSetDiary(data.data);
    }
  }, []);

  const handleModifyCriteria = async () => {
    const body = {
      ...diary,
      checklist: getDiaryChecklist(badChecklist, goodChecklist),
    };
    await patchDiary.mutateAsync({ ...body, id });
    push(`/diarylist/${id}`);
  };

  const modifyChecklist: Record<
    TQuery,
    { list: ICheckItem[]; setList: (value: ICheckItem[]) => void; onClick: () => void }
  > = {
    [TypeQuery.good]: {
      list: goodChecklist,
      setList: setGoodChecklist,
      onClick: () => {
        handleModifyCriteria();
      },
    },
    [TypeQuery.bad]: {
      list: badChecklist,
      setList: setBadChecklist,
      onClick: () => {
        push({ pathname: './criteria', query: { type: 'good' } });
      },
    },
  };

  return (
    <FooterButtonLayout onClick={modifyChecklist[type].onClick} text={DIARY_CRITERIA_TEXT[type].text}>
      <NavTopBar label="선택 기준 수정" onClick={back} />
      <h2 className="px-8 pt-7 text-[17px] font-medium text-gray-70">{DIARY_CRITERIA_TEXT[type].label}</h2>
      <div className="mt-[34px]">
        <ChecklistTabPage
          type={type}
          allList={modifyChecklist[type].list}
          setAllList={modifyChecklist[type].setList}
          length={modifyChecklist[type].list.length}
        />
      </div>
    </FooterButtonLayout>
  );
};
export default DiaryChecklistModifyPage;
