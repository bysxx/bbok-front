import { TDate, TEmoji } from '@interfaces/enums';
import { IDiaryCheckListItem } from './checklist';

/**
 * 일화 생성 request body
 */
export interface IDiaryRequestBody {
  checklist: IDiaryCheckListItem[];
  content: string;
  date: string;
  emoji: TEmoji | '';
  sticker: string;
  tags: string[];
}

export type TDiaryKey = keyof IDiaryRequestBody;
export type TDiaryValue = IDiaryRequestBody[TDiaryKey];

export interface IDiaryBody extends IDiaryRequestBody {
  id: number;
}

/**
 * 일화 생성 후 response type
 */
export interface IPostDiaryResponse {
  friendPercentage: number;
  saying: {
    contents: string;
    id: number;
    isMarked: boolean;
    reference: string;
  };
}

/**
 * 일화 리스트 response type
 */
export interface IDiaryListChecklist {
  criteria: string;
  id: number;
  isChecked: boolean;
}
export interface IDiariesItem {
  badChecklist: IDiaryListChecklist[];
  content: string;
  date: string;
  emoji: TEmoji;
  emojiUrl: string;
  goodChecklist: IDiaryListChecklist[];
  id: number;
  sticker: string;
  tags: string[];
}

export interface IDiaryListResponse {
  diaries: IDiariesItem[];
  numberOfElements: number;
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

/**
 * 일화 리스트 request body
 */
export interface IDiaryInfiniteRequest {
  id: number;
  order: TDate;
  q: string;
  tag: string[];
}
export interface IDiaryListRequest extends IDiaryInfiniteRequest {
  offset: number;
}
