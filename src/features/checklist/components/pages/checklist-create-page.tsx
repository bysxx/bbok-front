'use client';

import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { CHECKLIST_TABS } from '@features/checklist/constants';
import useHandleChecklist from '@features/checklist/hooks/useHandleChecklist';
import { getChecklistComplete } from '@features/checklist/utils/getChecklist';
import { usePostChecklist } from '@hooks/queries/checklist';
import { useTabs } from '@hooks/useTabs';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useState } from 'react';

import { ChecklistBadTemplate, ChecklistGoodTemplate } from '../templates';

const CheckListCreatePage = () => {
  const { currentItem, changeItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { allBadList, setAllBadList, allGoodList, setAllGoodList } = useHandleChecklist();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateAsync } = usePostChecklist();

  const handleCheckListComplete = async () => {
    setIsLoading(true);
    const body = {
      badChecklist: getChecklistComplete(allBadList),
      goodChecklist: getChecklistComplete(allGoodList),
    };
    await mutateAsync(body);
  };

  return (
    <FooterButtonLayout
      disabled={
        currentItem?.tab === TypeQuery.bad
          ? allBadList.filter((bad) => bad.isChecked === true).length !== 5
          : allGoodList.filter((good) => good.isChecked === true).length !== 5
      }
      onClick={
        currentItem?.tab === TypeQuery.bad
          ? () => {
              changeItem(1);
            }
          : handleCheckListComplete
      }
      text={currentItem?.content!}
      isLoading={isLoading}
    >
      {currentItem?.tab === TypeQuery.bad && (
        <ChecklistBadTemplate allBadList={allBadList} setAllBadList={setAllBadList} />
      )}
      {currentItem?.tab === TypeQuery.good && (
        <ChecklistGoodTemplate allGoodList={allGoodList} setAllGoodList={setAllGoodList} changeItem={changeItem} />
      )}
    </FooterButtonLayout>
  );
};
export default CheckListCreatePage;
