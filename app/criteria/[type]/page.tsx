'use client';

import { NavTopBar } from '@components/top-bar';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { ChecklistTabPage } from '@features/checklist/components';
import useCustomRouter from '@hooks/useCustomRouter';
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
  const { push } = useCustomRouter();
  const initialModifyList = data[params.type === 'bad' ? 'badChecklist' : 'goodChecklist'];
  const [modifyCheckList, setModifyCheckList] = useState<ICheckItem[]>(initialModifyList);

  const handleSetModifyCheckList = useCallback(
    (item: ICheckItem[]) => {
      setModifyCheckList(item);
    },
    [setModifyCheckList],
  );

  return (
    <FooterButtonLayout
      disabled={modifyCheckList.filter((c) => c.checked === true).length !== 5}
      onClick={() => {
        // 통신 & 페이지 이동
        console.log(modifyCheckList);
      }}
      text="완료"
    >
      <NavTopBar label="기준 수정" onClick={() => push('./')} />
      <ModifyCheckListTitle type={params.type} list={modifyCheckList} />
      <div className="mt-[34px]">
        <ChecklistTabPage
          type="good"
          allList={modifyCheckList}
          setAllList={handleSetModifyCheckList}
          length={initialModifyList.length}
          use="modify"
        />
      </div>
    </FooterButtonLayout>
  );
};

export default CriteriaModifyPage;
