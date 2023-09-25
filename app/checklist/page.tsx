'use client';

import { Button } from '@components/buttons';
import { ChangeTopBar } from '@components/top-bar';
import { useCallback, useState } from 'react';

import BadCheckList from './bad-checklist';
import CheckListTitle from './checklist-title';
import GoodCheckList from './good-checlist';

const CheckListPage = () => {
  const [type, setType] = useState<'first' | 'second'>('first');
  const [badCount, setBadCount] = useState<number>(0);
  const [goodCount, setGoodCount] = useState<number>(0);
  // 사용자가 체크한 bad list
  const [badCheckList, setBadCheckList] = useState<string[]>([]);
  /// / 사용자가 체크한 good list
  const [goodCheckList, setGoodCheckList] = useState<string[]>([]);

  // bad list 업데이트 하는 함수
  const handleSetBadCheckList = useCallback(
    (value: string[]) => {
      setBadCheckList(value);
      setBadCount(value.length);
    },
    [setBadCheckList, setBadCount],
  );

  // good list 업데이트 함수
  const handleSetGoodCheckList = useCallback(
    (value: string[]) => {
      setGoodCheckList(value);
      setGoodCount(value.length);
    },
    [setGoodCheckList, setGoodCount],
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-full w-full flex-1 flex-col justify-center">
        <ChangeTopBar type={type} setType={setType} />
        <div className="ml-8">
          <CheckListTitle type={type} />
          {type === 'first' && (
            <h2 className={`text-body-4 mt-1 ${badCount === 5 ? 'text-orange-2' : 'text-gray-20'} `}>{badCount}/5</h2>
          )}
          {type === 'second' && (
            <h2 className={`text-body-4 mt-1 ${goodCount === 5 ? 'text-orange-2' : 'text-gray-20'} `}>{goodCount}/5</h2>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          {type === 'first' && <BadCheckList badCheckList={badCheckList} setBadCheckList={handleSetBadCheckList} />}
          {type === 'second' && (
            <GoodCheckList goodCheckList={goodCheckList} setGoodCheckList={handleSetGoodCheckList} />
          )}
        </div>
      </div>

      {/* 하단 footer 버튼 */}
      <div className="sticky bottom-[50px] h-[93px]">
        {type === 'first' && (
          <Button
            disabled={badCount !== 5}
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
            disabled={goodCount !== 5}
            text="완료"
            onClick={() => {
              // 페이지 이동
              // console.log(badCheckList, goodCheckList);
            }}
            size="large"
            border={true}
          />
        )}
      </div>
    </div>
  );
};
export default CheckListPage;
