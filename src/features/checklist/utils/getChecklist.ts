import type { ICheckItem, IUserChecklistItem, TChecklistCreateItem } from '@interfaces/checklist';
import uuid from 'react-uuid';

import { CHECK_LIST } from '../constants';

/**
 * 체크리스트 생성 최종 request body 리스트 가공
 */
const getCreatehecklistComplete = (checklists: IUserChecklistItem<string>[]): TChecklistCreateItem[] => {
  const result = checklists.map((list) => {
    return { criteria: list.criteria, isUsed: list.isUsed };
  });
  return result;
};

/**
 * 체크리스트 update
 */
const updateChecklist = <T>(checklists: ICheckItem<T>[], id: T): ICheckItem<T>[] => {
  const updateItem = checklists.map((checklist: ICheckItem<T>) => {
    if (checklist.id === id) {
      return {
        ...checklist,
        isChecked: !checklist.isChecked,
      };
    }
    return checklist;
  });

  return updateItem;
};

/**
 * good 체크리스트 초기 initial data return
 */
const getGoodChecklistInitialData = (): IUserChecklistItem<string>[] => {
  return CHECK_LIST.good.map((badchecklists) => {
    return {
      id: uuid(),
      criteria: badchecklists,
      isUsed: false,
    };
  });
};

/**
 * bad 체크리스트 초기 initial data return
 */
const getBadChecklistInitialData = (): IUserChecklistItem<string>[] => {
  return CHECK_LIST.bad.map((goodchecklists) => {
    return {
      id: uuid(),
      criteria: goodchecklists,
      isUsed: false,
    };
  });
};

const updateChecklistData = <T>(checklists: IUserChecklistItem<T>[], id: T): IUserChecklistItem<T>[] => {
  const updateItem = checklists.map((checklist: IUserChecklistItem<T>) => {
    if (checklist.id === id) {
      return {
        ...checklist,
        isUsed: !checklist.isUsed,
      };
    }
    return checklist;
  });

  return updateItem;
};

/**
 * 체크리스트 체크된 항목의 개수를 return
 */
const getChecklistCount = <T>(list: IUserChecklistItem<T>[]) => {
  return list.filter((l: IUserChecklistItem<T>) => l.isUsed === true).length;
};
export {
  getBadChecklistInitialData,
  getChecklistCount,
  getCreatehecklistComplete,
  getGoodChecklistInitialData,
  updateChecklist,
  updateChecklistData,
};
