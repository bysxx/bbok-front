import { TQuery } from '@interfaces/enums';

export const DIARY_CRITERIA_TEXT: { [key in TQuery]: { text: string; label: string } } = {
  good: {
    text: '수정',
    label: '내 기준에 적합한 친구',
  },
  bad: {
    text: '다음',
    label: '내 기준에 벗어난 친구',
  },
};
