/**
 * 체크리스트 생성할 때 객체 타입
 * 생성 => id 타입 string, 수정 => id 타입 number
 */
export interface IChecklistItem<T = number> {
  id: T;
  criteria: string;
  isUsed: boolean;
}

export interface ICreateChecklistBody {
  badChecklist: IChecklistItem<string>;
  goodChecklist: IChecklistItem<string>;
}
