'use client';

import { CheckList, WriteCheckList } from '@components/check-list';
import { EtcButton } from '@components/etc-buttons';
import type { ICheckItem } from '@interfaces/checklist';
import uuid from 'react-uuid';

interface TypeCheckListProps {
  type: 'good' | 'bad';
  allList: ICheckItem[];
  setAllList: (value: ICheckItem[]) => void;
  length: number;
}

const TypeCheckList = ({ type, allList, setAllList, length }: TypeCheckListProps) => {
  // 체크리스트 아이템을 클릭했을 때
  const handleCheckItemClick = (item: ICheckItem) => {
    const updateItem = allList.map((i: ICheckItem) => {
      if (i.key === item.key) {
        return {
          ...i,
          isChecked: !i.isChecked,
        };
      }
      return i;
    });
    setAllList(updateItem);
  };

  // 체크리스트 아이템을 생성할 때
  const handlePlusCountClick = () => {
    const updateItem: ICheckItem[] = [...allList, { key: uuid(), contents: '', isChecked: false }];
    setAllList(updateItem);
  };

  // 체크리스트 아이템을 삭제할 때
  const handleCheckListDelete = (item: ICheckItem) => {
    setAllList(allList.filter((i) => i.key !== item.key));
  };

  return (
    <div className="mt-[38px]">
      <h5 className="text-body-3 mb-4">{`내 기준에 ${type === 'bad' ? '벗어난' : '적합한'} 친구`}</h5>

      {allList.slice(0, length).map((item) => (
        <div key={item.key} className="mb-[12px]">
          <CheckList
            selected={item.isChecked}
            label={item.contents}
            key={item.key}
            onClick={() => handleCheckItemClick(item)}
          />
        </div>
      ))}

      {allList.slice(length)?.map((item) => (
        <div className="mb-4" key={item.key}>
          <WriteCheckList
            selected={item.isChecked}
            onClick={() => handleCheckItemClick(item)}
            value={item}
            setValue={setAllList}
            onDelete={() => handleCheckListDelete(item)}
            allList={allList}
          />
        </div>
      ))}

      {allList.length > 0 && allList.length < length + 5 && <EtcButton type="plus" onClick={handlePlusCountClick} />}
    </div>
  );
};
export default TypeCheckList;
