import { IChecklistCreateItem } from '@interfaces/checklist';

/**
 * 체크리스트 생성할 때 객체 타입
 * 생성 => id 타입 string, 수정 => id 타입 number
 */
export interface IChecklistItem<T = number> extends IChecklistCreateItem {
  id: T;
}

export interface ICreateChecklistBody {
  badChecklist: IChecklistItem<string>[];
  goodChecklist: IChecklistItem<string>[];
}
