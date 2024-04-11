'use client';

/**
 * @description 모든 체크 리스트 보여주는 컴포넌트
 */
import BoxButton from '@components/buttons/box-button';
import CheckInput from '@components/check-input';
import type { TQuery } from '@constants/query';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { updateChecklistData } from '@features/checklist/utils';
import type { IUserChecklistItem } from '@interfaces/checklist';
import uuid from 'react-uuid';

import WriteCheckInput from '../write-input';

interface TypeCheckListProps<T> {
  type: TQuery;
  allList: IUserChecklistItem<T>[];
  setAllList: (value: IUserChecklistItem<T>[]) => void;
  length: number;
}

function ChecklistTab<T = number | string>({ type, allList, setAllList, length }: TypeCheckListProps<T>) {
  // 체크리스트 아이템을 클릭했을 때
  const handleCheckItemClick = (item: IUserChecklistItem<T>) => {
    setAllList(updateChecklistData(allList, item.id));
  };

  // 체크리스트 아이템을 생성할 때
  const handlePlusCountClick = () => {
    const updateItem: IUserChecklistItem<T>[] = [...allList, { id: uuid() as T, criteria: '', isUsed: false }];
    setAllList(updateItem);
  };

  // 체크리스트 아이템을 삭제할 때
  const handleCheckListDelete = (item: IUserChecklistItem<T>) => {
    setAllList(allList.filter((i) => i.id !== item.id));
  };

  return (
    <div className="w-full px-8">
      <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[type].label}</h5>
      {allList.slice(0, length).map((item: IUserChecklistItem<T>, i) => (
        <div key={i} className="mb-[12px]">
          <CheckInput selected={item.isUsed} label={item.criteria} onClick={() => handleCheckItemClick(item)} />
        </div>
      ))}
      {allList.slice(length)?.map((item, i) => (
        <div className="mb-4" key={i}>
          <WriteCheckInput
            selected={item.isUsed}
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
    </div>
  );
}
export default ChecklistTab;
