import { ICheckItem, IChecklistCreateItem } from '@interfaces/checklist';
import { CHECK_LIST } from '../constants';
import uuid from 'react-uuid';
import { IChecklistItem } from '../types';

/**
 * 체크리스트 생성 최종 request body 리스트 가공
 */
const getCreatehecklistComplete = (checklists: IChecklistItem<string>[]): IChecklistCreateItem[] => {
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
const getGoodChecklistInitialData = (): IChecklistItem<string>[] => {
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
const getBadChecklistInitialData = (): IChecklistItem<string>[] => {
  return CHECK_LIST.bad.map((goodchecklists) => {
    return {
      id: uuid(),
      criteria: goodchecklists,
      isUsed: false,
    };
  });
};

const updateChecklistData = <T>(checklists: IChecklistItem<T>[], id: T): IChecklistItem<T>[] => {
  const updateItem = checklists.map((checklist: IChecklistItem<T>) => {
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
export {
  updateChecklist,
  getCreatehecklistComplete,
  updateChecklistData,
  getGoodChecklistInitialData,
  getBadChecklistInitialData,
};
