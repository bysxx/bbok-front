'use client';

/**
 * @description 모든 체크 리스트 보여주는 컴포넌트
 */
import BoxButton from '@components/buttons/box-button';
import { TQuery } from '@interfaces/enums';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { CheckInput, WriteCheckInput } from '@components/check-input';
import uuid from 'react-uuid';
import { updateChecklistData } from '@features/checklist/utils';
import { IChecklistItem } from '@features/checklist/types';

interface TypeCheckListProps<T> {
  type: TQuery;
  allList: IChecklistItem<T>[];
  setAllList: (value: IChecklistItem<T>[]) => void;
  length: number;
}

function ChecklistTab<T = number | string>({ type, allList, setAllList, length }: TypeCheckListProps<T>) {
  // 체크리스트 아이템을 클릭했을 때
  const handleCheckItemClick = (item: IChecklistItem<T>) => {
    setAllList(updateChecklistData(allList, item.id));
  };

  // 체크리스트 아이템을 생성할 때
  const handlePlusCountClick = () => {
    const updateItem: IChecklistItem<T>[] = [...allList, { id: uuid() as T, criteria: '', isUsed: false }];
    setAllList(updateItem);
  };

  // 체크리스트 아이템을 삭제할 때
  const handleCheckListDelete = (item: IChecklistItem<T>) => {
    setAllList(allList.filter((i) => i.id !== item.id));
  };

  return (
    <div className="w-full px-8">
      <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[type].label}</h5>
      {allList.slice(0, length).map((item: IChecklistItem<T>, i) => (
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
