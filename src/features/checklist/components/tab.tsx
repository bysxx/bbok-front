'use client';

/**
 * @description 모든 체크 리스트 보여주는 컴포넌트
 */
import BoxButton from '@components/buttons/box-button';
import type { ICheckItem } from '@interfaces/checklist';
import { TQuery } from '@interfaces/enums';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { CheckInput, WriteCheckInput } from '@components/check-input';
import uuid from 'react-uuid';
import { updateChecklist } from '../utils/getChecklist';

interface TypeCheckListProps<T> {
  type: TQuery;
  allList: ICheckItem<T>[];
  setAllList: (value: ICheckItem<T>[]) => void;
  length: number;
  use?: 'make' | 'modify'; // 체크 리스트를 생성할 때 혹은 체크 리스트를 수정할 때
}

function ChecklistTab<T = number | string>({
  use = 'modify',
  type,
  allList,
  setAllList,
  length,
}: TypeCheckListProps<T>) {
  // 체크리스트 아이템을 클릭했을 때
  const handleCheckItemClick = (item: ICheckItem<T>) => {
    setAllList(updateChecklist(allList, item.id));
  };

  // 체크리스트 아이템을 생성할 때
  const handlePlusCountClick = () => {
    const updateItem: ICheckItem<T>[] = [...allList, { id: uuid() as T, criteria: '', isChecked: false }];
    setAllList(updateItem);
  };

  // 체크리스트 아이템을 삭제할 때
  const handleCheckListDelete = (item: ICheckItem<T>) => {
    setAllList(allList.filter((i) => i.id !== item.id));
  };

  return (
    <div className="w-full px-8">
      <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[type].label}</h5>
      {(() => {
        /**
         * 체크리스트 기준 생성하는 경우
         */
        if (use === 'make') {
          return (
            <>
              {allList.slice(0, length).map((item: ICheckItem<T>, i) => (
                <div key={i} className="mb-[12px]">
                  <CheckInput
                    selected={item.isChecked}
                    label={item.criteria}
                    onClick={() => handleCheckItemClick(item)}
                  />
                </div>
              ))}
              {allList.slice(length)?.map((item, i) => (
                <div className="mb-4" key={i}>
                  <WriteCheckInput
                    selected={item.isChecked}
                    onClick={() => handleCheckItemClick(item)}
                    value={item}
                    setValue={setAllList}
                    onDelete={() => handleCheckListDelete(item)}
                    allList={allList}
                  />
                </div>
              ))}

              {allList.length > 0 && allList.length < length + 5 && (
                <BoxButton text="+나만의 기준추가" onClick={handlePlusCountClick} bg="orange6" color="orange1" />
              )}
            </>
          );
        }
        /**
         * 체크리스트 수정하는 경우
         */
        return (
          <>
            {allList.map((item: ICheckItem<T>, i) => (
              <div key={i} className="mb-[12px]">
                <CheckInput
                  selected={item.isChecked}
                  label={item.criteria}
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
export default ChecklistTab;
