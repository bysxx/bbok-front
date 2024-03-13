'use client';

import { NavTopBar } from '@components/top-bar';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { ChecklistTabPage } from '@features/checklist/components';
import useCustomRouter from '@hooks/useCustomRouter';
import type { ICheckItem } from '@interfaces/checklist';
import { useCallback, useState } from 'react';

const goodChecklist: ICheckItem[] = [
  {
    id: 18,
    criteria: '이야기를 잘 듣고 공감해주는 친구',
    checked: true,
  },
  {
    id: 10,
    criteria: '존중하고 배려하는 마음을 가진 친구 ',
    checked: true,
  },
  {
    id: 11,
    criteria: '관심사가 비슷한 친구',
    checked: false,
  },
  {
    id: 20,
    criteria: '신뢰할 수 있는 친구',
    checked: false,
  },
  {
    id: 3,
    criteria: '성격이 잘 맞는 친구',
    checked: true,
  },
];

const DiaryListCriteriaModify = () => {
  const { push } = useCustomRouter();
  const [allCheckList, setAllCheckList] = useState<ICheckItem[]>(goodChecklist);
  const type = 'bad';

  const handleSetModifyCheckList = useCallback(
    (item: ICheckItem[]) => {
      setAllCheckList(item);
    },
    [allCheckList],
  );
  return (
    <FooterButtonLayout
      disabled={allCheckList.filter((c) => c.checked === true).length === 0}
      onClick={() => {
        // 통신 & 페이지 이동
        console.log(allCheckList);
      }}
      text="수정"
    >
      <NavTopBar label="선택 기준 수정" onClick={() => push('./')} />
      <h2 className="px-8 text-[17px] font-medium text-gray-70">{`내 기준에 ${
        type === 'bad' ? '벗어난' : '적합한'
      } 친구`}</h2>
      <div className="mt-[34px]">
        <ChecklistTabPage
          type={type}
          allList={allCheckList}
          setAllList={handleSetModifyCheckList}
          length={goodChecklist.length}
        />
      </div>
    </FooterButtonLayout>
  );
};
export default DiaryListCriteriaModify;
