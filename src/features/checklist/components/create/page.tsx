'use client';

import { ChangeTopBar } from '@components/top-bar';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import {
  BAD_CHECK_COUNT,
  CHECK_LIST_TABS_COUNT,
  CHECKLIST_TABS,
  GOOD_CHECK_COUNT,
} from '@features/checklist/constants';
import useHandleChecklist from '@features/checklist/hooks/useHandleChecklist';
import { getChecklistComplete } from '@features/checklist/utils/getChecklist';
import { usePostChecklist } from '@hooks/queries/checklist';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useState } from 'react';

import ChecklistCount from '../count';
import ChecklistTab from '../tab';
import ChecklistTitle from './title';

const ChecklistCreatePage = () => {
  const { currentItem, changeItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { allBadList, setAllBadList, allGoodList, setAllGoodList } = useHandleChecklist();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateAsync } = usePostChecklist();
  const { push } = useCustomRouter();

  const handleCheckListComplete = async () => {
    setIsLoading(true);
    const body = {
      badChecklist: getChecklistComplete(allBadList),
      goodChecklist: getChecklistComplete(allGoodList),
    };
    await mutateAsync(body);
  };

  const TABS = {
    [TypeQuery.good]: {
      list: allGoodList,
      setList: setAllGoodList,
      count: GOOD_CHECK_COUNT,
      index: 2,
      disabled: allGoodList.filter((good) => good.isChecked === true).length !== 5,
      onClick: handleCheckListComplete,
      back: () => {
        changeItem(0);
      },
    },
    [TypeQuery.bad]: {
      list: allBadList,
      setList: setAllBadList,
      count: BAD_CHECK_COUNT,
      index: 1,
      disabled: allBadList.filter((bad) => bad.isChecked === true).length !== 5,
      onClick: () => {
        changeItem(1);
      },
      back: () => {
        push('/login');
      },
    },
  };

  return (
    <FooterButtonLayout
      disabled={TABS[currentItem.tab].disabled}
      onClick={TABS[currentItem.tab].onClick}
      text={currentItem?.content}
      isLoading={isLoading}
    >
      <ChangeTopBar
        index={TABS[currentItem.tab].index}
        total={CHECK_LIST_TABS_COUNT}
        onClick={TABS[currentItem.tab].back}
      />

      <div className="ml-8 w-full">
        <ChecklistTitle type={currentItem?.tab} />
        <ChecklistCount list={TABS[currentItem.tab].list} />
      </div>

      <div className="mb-8 mt-[38px] flex flex-col items-center justify-center">
        <ChecklistTab
          type={currentItem.tab}
          allList={TABS[currentItem.tab].list}
          setAllList={TABS[currentItem.tab].setList}
          length={TABS[currentItem.tab].count}
          use="make"
        />
      </div>
    </FooterButtonLayout>
  );
};
export default ChecklistCreatePage;
