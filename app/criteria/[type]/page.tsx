'use client';

import { Button } from '@components/buttons';
import { TypeCheckList } from '@components/check-list-page';
import { NavTopBar } from '@components/top-bar';
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
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">
        <NavTopBar label="기준 수정" href="./" />
        <ModifyCheckListTitle type={params.type} list={modifyCheckList} />
        <div className="mt-[34px]">
          <TypeCheckList
            type={params.type}
            allList={modifyCheckList}
            setAllList={handleSetModifyCheckList}
            length={initialModifyList.length}
          />
        </div>
      </div>
      <footer className="sticky bottom-0 mt-24 h-[90px]">
        <Button
          disabled={modifyCheckList.filter((c) => c.checked === true).length !== 5}
          text="완료"
          onClick={() => {
            // 통신 & 페이지 이동
            console.log(modifyCheckList);
          }}
          size="large"
          border={true}
        />
      </footer>
    </div>
  );
};

export default CriteriaModifyPage;
