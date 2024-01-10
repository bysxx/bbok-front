'use client';

import { ChangeTopBar } from '@components/top-bar';
import { AllCheckList, CheckListCount, CheckListLayout } from '@components/ui/check-list';
import Loading from '@components/ui/loading';
import useCustomRouter from '@hooks/useCustomRouter';
import type { ICheckItem, ICheckList } from '@interfaces/checklist';
import { getAllCheckList, useAddCheckList } from '@requests/checklist';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import uuid from 'react-uuid';

import CheckListTitle from './checklist-title';

const CheckListPage = () => {
  // 해당 페이지 전환하는 상태(벗어난 => first, 적합한 => second)
  const [type, setType] = useState<'first' | 'second'>('first');
  const [allBadList, setAllBadList] = useState<ICheckItem[]>([]);
  const [allGoodList, setAllGoodList] = useState<ICheckItem[]>([]);

  let initialBadList: ICheckItem[] = [];
  let initialGoodList: ICheckItem[] = [];

  const { data, isLoading } = useQuery<ICheckList>('checklist', getAllCheckList, {
    onSuccess: (res) => {
      initialBadList = res?.badChecklist.map((item: string) => {
        return {
          id: uuid(),
          criteria: item,
          checked: false,
        };
      });
      setAllBadList(initialBadList);

      initialGoodList = res?.goodChecklist.map((item: string) => {
        return {
          id: uuid(),
          criteria: item,
          checked: false,
        };
      });
      setAllGoodList(initialGoodList);
    },
  });

  const { mutation: addCheckList } = useAddCheckList();

  const { push } = useCustomRouter();

  // 페이지에 보여지는 리스트들 update
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

  // 적합한 기준, 벗어난 기준 페이지 전환 상태 update
  const handleSetType = useCallback(
    (value: 'first' | 'second') => {
      setType(value);
    },
    [setType],
  );

  // good, bad 체크리스트 완료했을 때
  const handleCheckListComplete = () => {
    const badChecklist = allBadList
      .filter((bad) => bad.checked === true)
      .map((list) => {
        return list.criteria;
      });
    const goodChecklist = allGoodList
      .filter((good) => good.checked === true)
      .map((list) => {
        return list.criteria;
      });
    const body = {
      badChecklist,
      goodChecklist,
    };
    addCheckList.mutate(body);
    push('/');
  };

  return (
    <>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {!isLoading && data && (
        <CheckListLayout
          disabled={
            type === 'first'
              ? allBadList.filter((bad) => bad.checked === true).length !== 5
              : allGoodList.filter((good) => good.checked === true).length !== 5
          }
          onClick={
            type === 'first'
              ? () => {
                  handleSetType('second');
                }
              : handleCheckListComplete
          }
          text={type === 'first' ? '다음' : '완료'}
        >
          <ChangeTopBar type={type} setType={setType} />
          <div className="ml-8 w-full">
            <CheckListTitle type={type} />
            <CheckListCount list={type === 'first' ? allBadList : allGoodList} />
          </div>
          <div className="mt-[38px] flex flex-col items-center justify-center">
            {(() => {
              if (type === 'first') {
                return (
                  <AllCheckList
                    type="bad"
                    allList={allBadList}
                    setAllList={handleSetAllBadList}
                    length={data?.badChecklist.length}
                    use="make"
                  />
                );
              }
              return (
                <AllCheckList
                  type="good"
                  allList={allGoodList}
                  setAllList={handleSetAllGoodList}
                  length={data?.goodChecklist.length}
                  use="make"
                />
              );
            })()}
          </div>
        </CheckListLayout>
      )}
    </>
  );
};
export default CheckListPage;
