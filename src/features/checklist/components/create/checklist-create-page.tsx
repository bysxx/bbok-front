'use client';

import { ChangeTopBar } from '@components/top-bar';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { ChecklistCount, ChecklistTabPage, ChecklistTitle } from '@features/checklist/components';
import { BAD_CHECK_COUNT, GOOD_CHECK_COUNT } from '@features/checklist/constants/checklist';
import useHandleChecklist from '@features/checklist/hooks/useHandleChecklist';
import { getChecklistComplete } from '@features/checklist/utils/getChecklist';
import { usePostChecklist } from '@hooks/queries/checklist';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useState } from 'react';

const CheckListCreatePage = () => {
  const tabs: { tab: TQuery; content: string }[] = [
    { tab: TypeQuery.bad, content: '다음' },
    { tab: TypeQuery.good, content: '완료' },
  ];
  const { currentItem, changeItem } = useTabs<TQuery>(0, tabs);

  const { allBadList, setAllBadList, allGoodList, setAllGoodList } = useHandleChecklist();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useCustomRouter();
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
      <ChangeTopBar
        index={1}
        total={2}
        onClick={() => {
          if (currentItem?.tab === TypeQuery.bad) {
            push('/login');
          } else {
            changeItem(0);
          }
        }}
      />
      <div className="ml-8 w-full">
        <ChecklistTitle type={currentItem?.tab!} />
        <ChecklistCount list={currentItem?.tab === TypeQuery.bad ? allBadList : allGoodList} />
      </div>

      <div className="mb-8 mt-[38px] flex flex-col items-center justify-center">
        {(() => {
          if (currentItem?.tab === TypeQuery.bad) {
            return (
              <ChecklistTabPage
                type={TypeQuery.bad}
                allList={allBadList}
                setAllList={setAllBadList}
                length={BAD_CHECK_COUNT}
                use="make"
              />
            );
          }
          return (
            <ChecklistTabPage
              type={TypeQuery.good}
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
export default CheckListCreatePage;
