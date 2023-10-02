// 서비스 제공하는 체크리스트 목록
export interface ICheckList {
  badChecklist: string[];
  goodChecklist: string[];
}

export interface ICheckItem {
  key: string;
  contents: string;
  isChecked: boolean;
}
