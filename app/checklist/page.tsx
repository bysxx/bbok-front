'use client';

import { Button } from '@components/buttons';
import { useCallback, useState } from 'react';

import BadCheckList from './bad-checklist';
import CheckListTitle from './checklist-title';

const CheckListPage = () => {
  const type = 'bad';
  const [count, setCount] = useState<number>(0);
  // 사용자가 체크한 bad list
  const [badCheckList, setBadCheckList] = useState<string[]>([]);
  /// / 사용자가 체크한 good list
  // const [goodCheckList, setGoodCheckList] = useState<string[]>([]);

  // bad list 업데이트 하는 함수
  const handleSetBadCheckList = useCallback(
    (value: string[]) => {
      setBadCheckList(value);
      setCount(value.length);
    },
    [setBadCheckList, setCount],
  );

  // good list 업데이트 함수
  // const handleSetGoodCheckList = useCallback(
  //  (value: string[]) => {
  //    setGoodCheckList(value);
  //    setCount(value.length);
  //  },
  //  [setGoodCheckList, setCount],
  // );

  return (
    <div className="flex h-full flex-col">
      <div className="ml-[32px] flex flex-1 flex-col">
        <CheckListTitle type={type} />
        <h2 className={`text-body-4 mt-1 ${count === 5 ? 'text-orange-2' : 'text-gray-20'} `}>{count}/5</h2>
        {type === 'bad' && <BadCheckList badCheckList={badCheckList} setBadCheckList={handleSetBadCheckList} />}
      </div>

      {/* 하단 footer 버튼 */}
      <div className="sticky bottom-[50px] h-[93px]">
        <Button disabled={count !== 5} text="다음" onClick={() => {}} size="large" border={true} />
      </div>
    </div>
  );
};
export default CheckListPage;
