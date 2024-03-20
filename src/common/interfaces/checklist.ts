/**
 * 서비스 제공하는 체크 리스트 response type
 */
export interface ICheckList {
  badChecklist: string[];
  goodChecklist: string[];
}

export interface ICheckItem<T = number> {
  id: T;
  criteria: string;
  isChecked: boolean;
}

/**
 * 사용자 정의 체크리스트 생성 request body type
 */
export interface IChecklistCreateItem {
  criteria: string;
  isUsed: boolean;
}
export interface IChecklistCreateRequestBody {
  badChecklist: IChecklistCreateItem[];
  goodChecklist: IChecklistCreateItem[];
}

/**
 * 일화 생성 및 수정 체크리스트 item type
 */
export interface IDiaryCheckListItem {
  id: number;
  isChecked: boolean;
  isGood: boolean;
}
