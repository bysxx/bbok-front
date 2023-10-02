import CheckBox from '@components/check-box';
import type { ICheckItem } from '@interfaces/checklist';
import React from 'react';

interface WriteCheckListProps {
  selected: boolean;
  onClick: () => void;
  value: ICheckItem;
  setValue: (value: ICheckItem[]) => void;
  onDelete: () => void;
  allList: ICheckItem[];
}

const WriteCheckList = ({ selected, onClick, value, setValue, onDelete, allList }: WriteCheckListProps) => {
  // 체크리스트 아이템 작성할 때
  const handleCheckListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateItem = allList.map((i) => {
      if (i.key === value.key) {
        return {
          ...i,
          contents: e.target.value,
        };
      }
      return i;
    });
    setValue(updateItem);
  };

  return (
    <div
      className={`flex h-[52px] w-[312px] items-center rounded-lg border ${
        selected ? 'border-orange-2 bg-orange-6' : 'border-gray-15'
      }  px-4 py-[15px]`}
    >
      <CheckBox selected={selected} onClick={onClick} />
      <div className="ml-[10px]">
        <div className="flex items-center justify-center">
          <input
            className={`${
              selected ? 'bg-orange-6' : ''
            } w-[216px] border-b border-gray-20 focus:border-b focus:border-gray-20 focus:outline-0 active:border-b`}
            placeholder="나만의 기준을 입력하세요"
            value={value.contents}
            onChange={handleCheckListChange}
          />
          <img src={'/images/icon/ui/trash.svg'} className="ml-[8px] cursor-pointer" onClick={onDelete} alt="" />
        </div>
      </div>
    </div>
  );
};
export default WriteCheckList;
