'use client';

/**
 * @description 모든 체크 리스트 보여주는 컴포넌트
 */
import BoxButton from '@components/buttons/box-button';
import { CheckList, WriteCheckList } from '@components/check-list';
import type { ICheckItem } from '@interfaces/checklist';
import { useCallback } from 'react';
import uuid from 'react-uuid';

interface TypeCheckListProps {
  type: 'good' | 'bad';
  allList: ICheckItem[];
  setAllList: (value: ICheckItem[]) => void;
  length: number;
  use?: 'make' | 'modify'; // 체크 리스트를 생성할 때 혹은 체크 리스트를 수정할 때
}

function AllCheckList({ use = 'modify', type, allList, setAllList, length }: TypeCheckListProps) {
  // 체크리스트 아이템을 클릭했을 때
  const handleCheckItemClick = useCallback(
    (item: ICheckItem) => {
      const updateItem = allList.map((i: ICheckItem) => {
        if (i.id === item.id) {
          return {
            ...i,
            checked: !i.checked,
          };
        }
        return i;
      });
      setAllList(updateItem);
    },
    [allList],
  );

  // 체크리스트 아이템을 생성할 때
  const handlePlusCountClick = useCallback(() => {
    const updateItem: ICheckItem[] = [...allList, { id: uuid(), criteria: '', checked: false }];
    setAllList(updateItem);
  }, [allList]);

  // 체크리스트 아이템을 삭제할 때
  const handleCheckListDelete = useCallback(
    (item: ICheckItem) => {
      setAllList(allList.filter((i) => i.id !== item.id));
    },
    [allList],
  );

  return (
    <div className="w-full px-8">
      <h5 className="text-body-3 mb-4">{`내 기준에 ${type === 'bad' ? '벗어난' : '적합한'} 친구`}</h5>
      {(() => {
        // 체크리스트 기준 생성하는 경우
        if (use === 'make') {
          return (
            <>
              {allList.slice(0, length).map((item: ICheckItem) => (
                <div key={item.id} className="mb-[12px]">
                  <CheckList
                    selected={item.checked}
                    label={item.criteria}
                    key={item.id}
                    onClick={() => handleCheckItemClick(item)}
                  />
                </div>
              ))}
              {allList.slice(length)?.map((item) => (
                <div className="mb-4" key={item.id}>
                  <WriteCheckList
                    selected={item.checked}
                    onClick={() => handleCheckItemClick(item)}
                    value={item}
                    setValue={setAllList}
                    onDelete={() => handleCheckListDelete(item)}
                    allList={allList}
                  />
                </div>
              ))}

              {allList.length > 0 && allList.length < length + 5 && (
                <BoxButton text="+나만의 기준추가" onClick={handlePlusCountClick} bg="orange6" textColor="orange1" />
              )}
            </>
          );
        }
        // 기존의 체크 리스트 수정하는경우
        return (
          <>
            {allList.map((item: ICheckItem) => (
              <div key={item.id} className="mb-[12px]">
                <CheckList
                  selected={item.checked}
                  label={item.criteria}
                  key={item.id}
                  onClick={() => handleCheckItemClick(item)}
                />
              </div>
            ))}
          </>
        );
      })()}
    </div>
  );
}
export default AllCheckList;
