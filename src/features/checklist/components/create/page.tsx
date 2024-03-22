'use client';

import { ChangeTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import {
  BAD_CHECK_COUNT,
  CHECK_LIST_TABS_COUNT,
  CHECKLIST_TABS,
  GOOD_CHECK_COUNT,
} from '@features/checklist/constants';
import {
  getBadChecklistInitialData,
  getCreatehecklistComplete,
  getGoodChecklistInitialData,
} from '@features/checklist/utils';
import { usePostChecklist } from '@hooks/queries/checklist';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import { IMyCheckListResponse } from '@interfaces/checklist';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import ChecklistCount from './count';
import ChecklistTab from './tab';
import ChecklistTitle from './title';

const ChecklistCreatePage = () => {
  const { push } = useCustomRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateAsync } = usePostChecklist();
  const { currentItem, changeItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { register, control } = useFormContext<IMyCheckListResponse<string>>();
  const { field: badField } = useController({
    name: 'badChecklist',
    control,
    defaultValue: getBadChecklistInitialData(),
  });
  const { field: goodField } = useController({
    name: 'goodChecklist',
    control,
    defaultValue: getGoodChecklistInitialData(),
  });

  const handleCheckListComplete = async () => {
    setIsLoading(true);
    const body = {
      badChecklist: getCreatehecklistComplete(badField.value),
      goodChecklist: getCreatehecklistComplete(goodField.value),
    };
    await mutateAsync(body);
  };

  const TABS = {
    [TypeQuery.good]: {
      list: goodField.value,
      setList: goodField.onChange,
      count: GOOD_CHECK_COUNT,
      index: 2,
      disabled: goodField.value.filter((good) => good.isUsed === true).length !== 5,
      onClick: handleCheckListComplete,
      back: () => {
        changeItem(0);
      },
    },
    [TypeQuery.bad]: {
      list: badField.value,
      setList: badField.onChange,
      count: BAD_CHECK_COUNT,
      index: 1,
      disabled: badField.value.filter((bad) => bad.isUsed === true).length !== 5,
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

      <div
        className="mb-8 mt-[38px] flex flex-col items-center justify-center"
        {...register('badChecklist')}
        {...register('goodChecklist')}
      >
        <ChecklistTab
          type={currentItem.tab}
          allList={TABS[currentItem.tab].list}
          setAllList={TABS[currentItem.tab].setList}
          length={TABS[currentItem.tab].count}
        />
      </div>
    </FooterButtonLayout>
  );
};
export default ChecklistCreatePage;
