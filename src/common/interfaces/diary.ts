import type { TDate, TEmoji } from '@interfaces/enums';

import type { ICheckItem, IDiaryCheckListItem } from './checklist';

/**
 * 일화 생성 request body
 */
export interface IDiaryRequestBody {
  checklist: IDiaryCheckListItem[];
  content: string;
  date: string;
  emoji: TEmoji | null;
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
export interface IDiariesItem {
  badChecklist: ICheckItem[];
  content: string;
  date: string;
  emoji: TEmoji;
  emojiUrl: string;
  goodChecklist: ICheckItem[];
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
  tag: string;
}
export interface IDiaryListRequest extends IDiaryInfiniteRequest {
  offset: number;
}

/**
 * 일화 태그 목록 조회 response type
 */
export interface IDiaryTag {
  id: number;
  name: string;
}

export interface IDiaryTagReponse {
  tags: IDiaryTag[];
}

/**
 * 일화 디테일 상세 response type
 */
export interface IDiaryDetailResponse {
  badChecklist: ICheckItem[];
  content: string;
  date: string;
  emoji: TEmoji;
  emojiUrl: string;
  goodChecklist: ICheckItem[];
  id: number;
  sticker: string;
  tags: string[];
}

/**
 * 일화 수정 request body
 */
export type TDiaryModifyRequestBody = NonNullable<IDiaryBody>;
