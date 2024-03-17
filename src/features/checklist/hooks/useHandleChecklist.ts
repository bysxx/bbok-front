import { ICheckItem } from '@interfaces/checklist';
import { useState } from 'react';
import { CHECK_LIST } from '../constants/checklist';
import uuid from 'react-uuid';

/**
 * 체크리스트 생성할 때 초기 상태 return
 */
const useHandleChecklist = () => {
  const initialBadList: ICheckItem<string>[] = CHECK_LIST.bad.map((badchecklists) => {
    return {
      id: uuid(),
      criteria: badchecklists,
      isChecked: false,
    };
  });
  const initialGoodList: ICheckItem<string>[] = CHECK_LIST.good.map((goodchecklists) => {
    return {
      id: uuid(),
      criteria: goodchecklists,
      isChecked: false,
    };
  });

  const [allBadList, setAllBadList] = useState<ICheckItem<string>[]>(initialBadList);
  const [allGoodList, setAllGoodList] = useState<ICheckItem<string>[]>(initialGoodList);

  return { allBadList, setAllBadList, allGoodList, setAllGoodList };
};

export default useHandleChecklist;
