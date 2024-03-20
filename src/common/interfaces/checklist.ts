/**
 * 서비스 제공하는 체크 리스트 response type
 */
export interface IChecklistLandingItem {
  criteria: string;
  isUsed: boolean;
}
export interface ICheckList {
  badChecklist: IChecklistLandingItem[];
  goodChecklist: IChecklistLandingItem[];
}

export interface ICheckItem<T = number> {
  id: T;
  criteria: string;
  isChecked: boolean;
}

/**
 * 일화 생성 및 수정 체크리스트 item type
 */
export interface IDiaryCheckListItem {
  id: number;
  isChecked: boolean;
  isGood: boolean;
}
