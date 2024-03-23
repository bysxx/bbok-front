/**
 * 서비스 제공하는 체크 리스트 response type
 */
export interface ICheckList {
  badChecklist: string[];
  goodChecklist: string[];
}

/**
 * 일화 상세 페이지 체크리스트 type
 */
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

/**
 * 사용자 정의 체크리스트 item type
 */
export interface IUserChecklistItem<T = number> {
  id: T;
  isUsed: boolean;
  criteria: string;
}

/**
 * 사용자 정의 생성할 체크리스트 item type
 */
export type TChecklistCreateItem = Pick<IUserChecklistItem, 'isUsed' | 'criteria'>;

/**
 * 사용자 정의 체크리스트 생성 request body type
 */
export interface IChecklistCreateRequestBody {
  badChecklist: TChecklistCreateItem[];
  goodChecklist: TChecklistCreateItem[];
}

/**
 * 사용자 정의 체크리스트 get reponse type
 */
export interface IMyCheckListResponse<T> {
  badChecklist: IUserChecklistItem<T>[];
  goodChecklist: IUserChecklistItem<T>[];
}

/**
 * 수정할 체크리스트 item type
 */
export type TModifyCheclistItem = Pick<IUserChecklistItem, 'id' | 'isUsed'>;
/**
 * 수정할 사용자 체크리스트 request body type
 */
export interface IModifyChecklistRequestBody {
  addedBadChecklist: TChecklistCreateItem;
  addedGoodChecklist: TChecklistCreateItem;
  modifiedBadChecklis: TModifyCheclistItem;
  modifiedGoodChecklist: TModifyCheclistItem;
}
