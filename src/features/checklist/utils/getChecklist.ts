import { ICheckItem } from '@interfaces/checklist';

/**
 * 체크리스트 생성 리스트 가공
 */
const getChecklistComplete = (checklists: ICheckItem[]): string[] => {
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
const updateChecklist = (checklists: ICheckItem[], id: string | number): ICheckItem[] => {
  const updateItem = checklists.map((checklist: ICheckItem) => {
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
