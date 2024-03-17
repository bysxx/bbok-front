import { ICheckItem } from '@interfaces/checklist';

/**
 * 체크리스트 생성 리스트 가공
 */
const getChecklistComplete = (checklists: ICheckItem<string>[]): string[] => {
  const result = checklists
    .filter((checklist) => checklist.isChecked === true)
    .map((list) => {
      return list.criteria;
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

export { updateChecklist, getChecklistComplete };
