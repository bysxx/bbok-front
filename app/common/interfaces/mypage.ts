// 마이페이지 개인 정보 type
export interface IMyProfile {
  profileUrl: string;
  memberId: string;
  memberName: string;
  oauth2Provider: string; // 'KAKAO'
}

// 내가 설정한 체크리스트 type
interface CheckContent {
  id: number;
  criteria: string;
}

export interface IMyCheckList {
  badChecklist: CheckContent[];
  goodChecklist: CheckContent[];
}

// 수정할 체크리스트 body type
export interface IMyCheckListBody {
  isGood: boolean;
  checklist: CheckContent[];
}
