'use client';

import { NavTopBar } from '@components/top-bar';
import { AllCheckList, CheckListLayout } from '@components/ui/check-list';
import type { ICheckItem } from '@interfaces/checklist';
import { useCallback, useState } from 'react';

import { data } from './dummy';
import ModifyCheckListTitle from './modify-checklist-title';

interface CriteriaProps {
  params: {
    type: 'good' | 'bad';
  };
}
const CriteriaModifyPage = ({ params }: CriteriaProps) => {
  const initialModifyList = data[params.type === 'bad' ? 'badChecklist' : 'goodChecklist'];
  const [modifyCheckList, setModifyCheckList] = useState<ICheckItem[]>(initialModifyList);

  const handleSetModifyCheckList = useCallback(
    (item: ICheckItem[]) => {
      setModifyCheckList(item);
    },
    [setModifyCheckList],
  );

  return (
    <CheckListLayout
      disabled={modifyCheckList.filter((c) => c.checked === true).length !== 5}
      onClick={() => {
        // 통신 & 페이지 이동
        console.log(modifyCheckList);
      }}
      text="완료"
    >
      <NavTopBar label="기준 수정" href="./" />
      <ModifyCheckListTitle type={params.type} list={modifyCheckList} />
      <div className="mt-[34px]">
        <AllCheckList
          type="good"
          allList={modifyCheckList}
          setAllList={handleSetModifyCheckList}
          length={initialModifyList.length}
          use="modify"
        />
      </div>
    </CheckListLayout>
  );
};

export default CriteriaModifyPage;
