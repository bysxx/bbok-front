/**
 * 마이페이지 response type
 */
export interface IMyProfile {
  profileUrl: string;
  memberId: string;
  memberName: string;
  oauth2Provider: string; // 'KAKAO'
}

/**
 * 나만의 체크리스트 reponse type
 */
export interface CheckContent extends IAddChecklistItem {
  isUsed: boolean;
}

export interface IMyCheckList {
  badChecklist: CheckContent[];
  goodChecklist: CheckContent[];
}

/**
 * 수정할 나만의 체크리스트 request body type
 */
export interface IAddChecklistItem {
  criteria: string;
  isUsed: boolean;
}

export interface IModifyChecklistItem {
  isUsed: boolean;
  id: number;
}

export interface IModifyChecklistRequestBody {
  addedBadChecklist: IAddChecklistItem;
  addedGoodChecklist: IAddChecklistItem;
  modifiedBadChecklis: IModifyChecklistItem;
  modifiedGoodChecklist: IModifyChecklistItem;
}
export interface IMyCheckListBody {
  isGood: boolean;
  checklist: CheckContent[];
}

/**
 * 내 정보 조회 response type
 */
export interface IMyInfoRespone {
  memberId: string;
  memberName: string;
  oauth2Provider: string;
  profileUrl: string;
}
