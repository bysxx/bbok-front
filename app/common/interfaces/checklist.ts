// 서비스 제공하는 체크리스트 목록
export interface ICheckList {
  badChecklist: string[];
  goodChecklist: string[];
}

export interface ICheckItem {
  id: string | number;
  criteria: string;
  checked: boolean;
}
