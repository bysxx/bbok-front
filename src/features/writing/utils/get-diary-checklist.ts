import { ICheckItem, IDiaryCheckListItem } from '@interfaces/checklist';

import { IMyCheckList } from '@interfaces/member';

/**
 * 일화 리스트 초기 배열 return
 */
export const getInitialDiaryList = (list: IMyCheckList): IDiaryCheckListItem[] => {
  const goodList = list.goodChecklist.slice(0, 5).map((goodItem) => {
    return {
      id: goodItem.id,
      isChecked: false,
      isGood: true,
    };
  });
  const badList = list.badChecklist.slice(0, 5).map((badItem) => {
    return {
      id: badItem.id,
      isChecked: false,
      isGood: false,
    };
  });

  return [...goodList, ...badList];
};

/**
 * 일화 디테일 배열 return
 */
export const getDiaryChecklist = (badChecklist: ICheckItem[], goodChecklist: ICheckItem[]): IDiaryCheckListItem[] => {
  const checklist: IDiaryCheckListItem[] = [];
  badChecklist.forEach((baditem) =>
    checklist.push({
      id: baditem.id,
      isChecked: baditem.isChecked,
      isGood: false,
    }),
  );

  goodChecklist.forEach((gooditem) =>
    checklist.push({
      id: gooditem.id,
      isChecked: gooditem.isChecked,
      isGood: true,
    }),
  );

  return checklist;
};

/**
 * 일화 체크리스트 update
 */
export const updateDiaryChecklist = (id: number, list: IDiaryCheckListItem[]): IDiaryCheckListItem[] => {
  const updateDiary = list.map((checklist) => {
    if (checklist.id === id) {
      return {
        ...checklist,
        isChecked: !checklist.isChecked,
      };
    }
    return checklist;
  });

  return updateDiary;
};
