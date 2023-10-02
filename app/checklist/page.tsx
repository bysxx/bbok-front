'use client';

import { Button } from '@components/buttons';
import { ChangeTopBar } from '@components/top-bar';
import type { ICheckItem } from '@interfaces/checklist';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CheckListTitle from './checklist-title';
import TypeCheckList from './type-checklist';

const CheckListPage = () => {
  const [type, setType] = useState<'first' | 'second'>('first');

  const badCheckLists = [
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
  ];
  const goodCheckLists = [
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

  const initialBadList: ICheckItem[] = badCheckLists.map((item: string) => {
    return {
      key: uuidv4(),
      contents: item,
      isChecked: false,
    };
  });

  const initialGoodList: ICheckItem[] = goodCheckLists.map((item: string) => {
    return {
      key: uuidv4(),
      contents: item,
      isChecked: false,
    };
  });
  const [allBadList, setAllBadList] = useState<ICheckItem[]>(initialBadList);

  const [allGoodList, setAllGoodList] = useState<ICheckItem[]>(initialGoodList);

  // good, bad 체크리스트 완료했을 때
  const handleCheckListComplete = () => {
    const finalBadList = allBadList
      .filter((bad) => bad.isChecked === true)
      .map((list) => {
        return list.contents;
      });
    const finalGoodList = allGoodList
      .filter((good) => good.isChecked === true)
      .map((list) => {
        return list.contents;
      });

    console.log('badCheckList', finalBadList);
    console.log('goodCheckList', finalGoodList);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-full w-full flex-1 flex-col justify-center">
        <ChangeTopBar type={type} setType={setType} />
        <div className="ml-8">
          <CheckListTitle type={type} />
          {/* 체크한 리스트 아이템 개수 */}
          {type === 'first' && (
            <h2
              className={`text-body-4 mt-1 ${
                allBadList.filter((bad) => bad.isChecked === true).length ? 'text-orange-2' : 'text-gray-20'
              } `}
            >{`${allBadList.filter((bad) => bad.isChecked === true).length}/5`}</h2>
          )}
          {type === 'second' && (
            <h2
              className={`text-body-4 mt-1 ${
                allGoodList.filter((good) => good.isChecked === true).length ? 'text-orange-2' : 'text-gray-20'
              } `}
            >{`${allGoodList.filter((good) => good.isChecked === true).length}/5`}</h2>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          {type === 'first' && (
            <TypeCheckList type="bad" allList={allBadList} setAllList={setAllBadList} length={badCheckLists.length} />
          )}
          {type === 'second' && (
            <TypeCheckList
              type="good"
              allList={allGoodList}
              setAllList={setAllGoodList}
              length={goodCheckLists.length}
            />
          )}
        </div>
      </div>

      {/* 하단 footer 버튼 */}
      <div className="sticky bottom-[50px] h-[93px]">
        {type === 'first' && (
          <Button
            disabled={allBadList.filter((bad) => bad.isChecked === true).length !== 5}
            text="다음"
            onClick={() => {
              setType('second');
            }}
            size="large"
            border={true}
          />
        )}
        {type === 'second' && (
          <Button
            disabled={allGoodList.filter((good) => good.isChecked === true).length !== 5}
            text="완료"
            onClick={handleCheckListComplete}
            size="large"
            border={true}
          />
        )}
      </div>
    </div>
  );
};
export default CheckListPage;
