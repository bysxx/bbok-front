'use client';

import { Button } from '@components/buttons';
import { TypeCheckList } from '@components/check-list-page';
import { NavTopBar } from '@components/top-bar';
import type { ICheckItem } from '@interfaces/checklist';
import { useCallback, useState } from 'react';
import uuid from 'react-uuid';

import { data } from './dummy';
import ModifyCheckListTitle from './modify-checklist-title';

interface CriteriaProps {
  params: {
    type: 'good' | 'bad';
  };
}
const CriteriaModifyPage = ({ params }: CriteriaProps) => {
  const checkLists =
    params.type === 'bad'
      ? [
          '나를 배려하지 않는 친구',
          '신뢰를 잃는 행동을 하는 친구',
          '나의 자존감을 낮추는 친구',
          '유머 코드가 맞지 않는 친구',
          '나에게 너무 많이 의존하는 친구',
          '이성에 집착하는 친구',
          '자기 과시와 자랑이 심한 친구',
          '종교적·정치적 가치관이 다른 친구',
          '의사소통 스타일이 맞지 않는 친구',
          '나를 가르치려고 하는 친구',
        ]
      : [
          '이야기를 잘 듣고 공감해주는 친구',
          '존중하고 배려하는 마음을 가진 친구',
          '관심사가 비슷한 친구',
          '신뢰할 수 있는 친구',
          '긍정적인 친구',
          '성격이 잘 맞는 친구',
          '둘이서 만나도 편한 친구',
          '나를 편견없이 대해주는 친구',
          '배울 점이 많은 친구',
          '내 자존감을 올려주는 친구',
        ];
  const modifyList = data[params.type === 'bad' ? 'badChecklist' : 'goodChecklist'];
  const initialModifyList: ICheckItem[] = [];

  checkLists.forEach((check) => {
    const findItem = modifyList.find((m) => m.criteria === check);
    if (findItem) {
      initialModifyList.push({
        key: findItem.id,
        contents: findItem.criteria,
        isChecked: true,
      });
    } else {
      initialModifyList.push({
        key: uuid(),
        contents: check,
        isChecked: false,
      });
    }
  });

  modifyList.forEach((c) => {
    const findIndex = checkLists.find((check) => check === c.criteria);
    if (!findIndex) {
      initialModifyList.push({
        key: c.id,
        contents: c.criteria,
        isChecked: true,
      });
    }
  });

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
          disabled={modifyCheckList.filter((c) => c.isChecked === true).length !== 5}
          text="완료"
          onClick={() => {
            // 통신 & 페이지 이동 (추후에)
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
