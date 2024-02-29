import { TEmoji } from '@constants/enums';
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
