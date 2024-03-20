'use client';

import { NavTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import ChecklistTab from '@features/checklist/components/tab';
import { CHECKLIST_TABS, DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { getDiaryChecklist } from '@features/diary/utils/get-diary-checklist';
import { useDiaryMutation, useGetDiaryDetail } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import { ICheckItem } from '@interfaces/checklist';
import { TQuery, TypeQuery } from '@interfaces/enums';
import { useEffect, useState } from 'react';

interface IDiaryDetailCriteriaProp {
  params: {
    id: number;
  };
}

const DiaryDetailCriteriaPage = ({ params: { id } }: IDiaryDetailCriteriaProp) => {
  const { patchDiary } = useDiaryMutation();
  const { back, push } = useCustomRouter();
  const { data, isSuccess } = useGetDiaryDetail(id);
  const { currentItem, changeItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { tab } = currentItem;
  const [goodChecklist, setGoodChecklist] = useState<ICheckItem[]>([]);
  const [badChecklist, setBadChecklist] = useState<ICheckItem[]>([]);

  const handleModifyCriteria = () => {
    const body = {
      sticker: '',
      emoji: data?.data.emoji!,
      date: data?.data.date!,
      content: data?.data.content!,
      tags: data?.data.tags!,
      checklist: getDiaryChecklist(badChecklist, goodChecklist),
    };
    patchDiary.mutate({ ...body, id });
    push(`/diarylist/${id}`);
  };

  useEffect(() => {
    if (isSuccess && data) {
      setBadChecklist(data.data.badChecklist);
      setGoodChecklist(data.data.goodChecklist);
    }
  }, [isSuccess, data]);

  const modifyChecklist: Record<
    TQuery,
    { list: ICheckItem[]; setList: (value: ICheckItem[]) => void; onClick: () => void; navClick: () => void }
  > = {
    [TypeQuery.good]: {
      list: goodChecklist,
      setList: setGoodChecklist,
      onClick: () => {
        handleModifyCriteria();
      },
      navClick: () => changeItem(0),
    },
    [TypeQuery.bad]: {
      list: badChecklist,
      setList: setBadChecklist,
      onClick: () => {
        changeItem(1);
      },
      navClick: () => back(),
    },
  };

  return (
    <FooterButtonLayout onClick={modifyChecklist[tab].onClick} text={DIARY_CRITERIA_TEXT[tab].text}>
      <NavTopBar label="선택 기준 수정" onClick={modifyChecklist[tab].navClick} />
      <h2 className="px-8 pt-7 text-[17px] font-medium text-gray-70">{DIARY_CRITERIA_TEXT[tab].label}</h2>

      <div className="mt-[34px]">
        <ChecklistTab
          type={tab}
          allList={modifyChecklist[tab].list}
          setAllList={modifyChecklist[tab].setList}
          length={modifyChecklist[tab].list.length}
        />
      </div>
    </FooterButtonLayout>
  );
};
export default DiaryDetailCriteriaPage;
