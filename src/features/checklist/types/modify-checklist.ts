import { IUserChecklistItem } from '@interfaces/checklist';

/**
 * 체크리스트 수정할 때 context type
 */
export interface IModifyChecklistContext {
  addedBadChecklist: IUserChecklistItem<string>;
  addedGoodChecklist: IUserChecklistItem<string>;
  modifiedBadChecklis: IUserChecklistItem;
  modifiedGoodChecklist: IUserChecklistItem;
}
