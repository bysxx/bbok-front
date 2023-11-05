'use client';

import { Button } from '@components/buttons';
import { CheckCount, TypeCheckList } from '@components/check-list-page';
import { ChangeTopBar } from '@components/top-bar';
import type { ICheckItem } from '@interfaces/checklist';
import { useCallback, useState } from 'react';
import uuid from 'react-uuid';

import CheckListTitle from './checklist-title';

const CheckListPage = () => {
  const [type, setType] = useState<'first' | 'second'>('first');

  // api로 목록 받아오기
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
      id: uuid(),
      criteria: item,
      checked: false,
    };
  });

  const initialGoodList: ICheckItem[] = goodCheckLists.map((item: string) => {
    return {
      id: uuid(),
      criteria: item,
      checked: false,
    };
  });
  const [allBadList, setAllBadList] = useState<ICheckItem[]>(initialBadList);
  const [allGoodList, setAllGoodList] = useState<ICheckItem[]>(initialGoodList);

  const handleSetAllBadList = useCallback(
    (item: ICheckItem[]) => {
      setAllBadList(item);
    },
    [setAllBadList],
  );

  const handleSetAllGoodList = useCallback(
    (item: ICheckItem[]) => {
      setAllGoodList(item);
    },
    [setAllGoodList],
  );

  // good, bad 체크리스트 완료했을 때
  const handleCheckListComplete = () => {
    const finalBadList = allBadList
      .filter((bad) => bad.checked === true)
      .map((list) => {
        return list.criteria;
      });
    const finalGoodList = allGoodList
      .filter((good) => good.checked === true)
      .map((list) => {
        return list.criteria;
      });
    console.log(finalBadList, finalGoodList);
    // => finalBadList, finalGoodList api
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">
        <ChangeTopBar type={type} setType={setType} />
        <div className="ml-8 w-full">
          <CheckListTitle type={type} />
          {/* 체크한 리스트 아이템 개수 */}
          <CheckCount list={type === 'first' ? allBadList : allGoodList} />
        </div>
        <div className="mt-[38px] flex flex-col items-center justify-center">
          {type === 'first' && (
            <TypeCheckList
              type="bad"
              allList={allBadList}
              setAllList={handleSetAllBadList}
              length={badCheckLists.length}
              use="make"
            />
          )}
          {type === 'second' && (
            <TypeCheckList
              type="good"
              allList={allGoodList}
              setAllList={handleSetAllGoodList}
              length={goodCheckLists.length}
              use="make"
            />
          )}
        </div>
      </div>

      {/* 하단 footer 버튼 */}
      <footer className="sticky bottom-0 mt-24 h-[90px]">
        {type === 'first' && (
          <Button
            disabled={allBadList.filter((bad) => bad.checked === true).length !== 5}
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
            disabled={allGoodList.filter((good) => good.checked === true).length !== 5}
            text="완료"
            onClick={handleCheckListComplete}
            size="large"
            border={true}
          />
        )}
      </footer>
    </div>
  );
};
export default CheckListPage;
