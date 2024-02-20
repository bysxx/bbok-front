'use client';

import { ChangeTopBar } from '@components/top-bar';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { ChecklistCount, ChecklistTabPage } from '@features/checklist/components';
import { BAD_CHECK_COUNT, GOOD_CHECK_COUNT } from '@features/checklist/constants/checklist';
import useHandleChecklist from '@features/checklist/hooks/useHandleChecklist';
import { getChecklistComplete } from '@features/checklist/utils/getChecklist';
import { usePostChecklist } from '@hooks/queries/checklist';
import useCustomRouter from '@hooks/useCustomRouter';
import { useState } from 'react';

import CheckListTitle from './checklist-title';

const CheckListPage = () => {
  const [type, setType] = useState<'first' | 'second'>('first');
  const { allBadList, setAllBadList, allGoodList, setAllGoodList } = useHandleChecklist();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useCustomRouter();
  const { mutate } = usePostChecklist();

  const handleCheckListComplete = () => {
    setIsLoading(true);
    const body = {
      badChecklist: getChecklistComplete(allBadList),
      goodChecklist: getChecklistComplete(allGoodList),
    };
    mutate(body);
  };

  return (
    <FooterButtonLayout
      disabled={
        type === 'first'
          ? allBadList.filter((bad) => bad.checked === true).length !== 5
          : allGoodList.filter((good) => good.checked === true).length !== 5
      }
      onClick={
        type === 'first'
          ? () => {
              setType('second');
            }
          : handleCheckListComplete
      }
      text={type === 'first' ? '다음' : '완료'}
      isLoading={isLoading}
    >
      <ChangeTopBar
        type={type}
        onClick={() => {
          if (type === 'first') {
            push('/login');
          } else {
            setType('first');
          }
        }}
      />
      <div className="ml-8 w-full">
        <CheckListTitle type={type} />
        <ChecklistCount list={type === 'first' ? allBadList : allGoodList} />
      </div>

      <div className="mb-8 mt-[38px] flex flex-col items-center justify-center">
        {(() => {
          if (type === 'first') {
            return (
              <ChecklistTabPage
                type="bad"
                allList={allBadList}
                setAllList={setAllBadList}
                length={BAD_CHECK_COUNT}
                use="make"
              />
            );
          }
          return (
            <ChecklistTabPage
              type="good"
              allList={allGoodList}
              setAllList={setAllGoodList}
              length={GOOD_CHECK_COUNT}
              use="make"
            />
          );
        })()}
      </div>
    </FooterButtonLayout>
  );
};
export default CheckListPage;
