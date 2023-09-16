export interface IDiaryBase {
  emoji: string;
  date: string;
  content: string;
  tags: string[];
}

// 태그 목록 type
interface ITag {
  id: number;
  tag: string;
}

export interface ITagList {
  tages: ITag[];
}

// 친구 일화 목록 type
interface ITagItem {
  id: number;
  criteria: string;
  checked: boolean;
}

export interface IDiaryListItem extends IDiaryBase {
  id: number;
  emojiUrl: string;
  goodChecklist: ITagItem[];
  badChecklist: ITagItem[];
  sticker: string;
}

export interface IDiaryList {
  diaries: IDiaryListItem[];
  offset: number; // 시작 offset
  pageNumber: number; //  페이지 당 담을 수 있는 최대 용량의 데이터 개수
  pageSize: number; // 현재 페이지 번호 (0부터 시작)
  totalPages: number; // 전체 요소 개수 (필터링에 만족하는)
  totalElements: number; // 전체 페이지의 개수 (필터링에 만족하는)
  numberOfElements: number; // 현재 페이지에 담긴 데이터 개수
}

// 일화 스티커 목록 type
interface IStickerItem {
  name: string;
  stickerUrl: string;
}

export interface IStickerList {
  stickers: IStickerItem[];
}

// 일화 생성 body type
interface Checklist {
  id: number;
  isGood: boolean;
  isChecked: boolean;
}

export interface IDiaryBody extends IDiaryBase {
  checklist: Checklist[];
}

// 일화 생성후 응답 type
interface DiarySaying {
  id: number;
  isMarked: boolean;
  content: string;
  reference: string;
}

export interface IDiaryResponse {
  saying: DiarySaying;
  friendPercentage: number;
}

// 일화 수정
export interface IDiaryModifyBody extends IDiaryBase {
  goodChecklists: string[];
  badChecklists: string[];
}
