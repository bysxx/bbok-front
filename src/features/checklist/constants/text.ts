import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';

export const DIARY_CRITERIA_TEXT: { [key in TQuery]: { text: string; label: string; title: string } } = {
  [TypeQuery.good]: {
    text: '수정',
    label: '내 기준에 적합한 친구',
    title: '적합한 친구 유형',
  },
  [TypeQuery.bad]: {
    text: '다음',
    label: '내 기준에 벗어난 친구',
    title: '벗어난 친구 유형',
  },
};
