import type { TQuery } from '@constants/query';
import { TYPE_QUERY } from '@constants/query';

interface IDiaryTextContent {
  text: string;
  label: string;
  title: string;
  subLabel: string;
  img: string;
}
export const DIARY_CRITERIA_TEXT: Record<TQuery, IDiaryTextContent> = {
  [TYPE_QUERY.good]: {
    text: '수정',
    label: '내 기준에서 적합한 친구',
    title: '적합한 친구 유형',
    subLabel: '적합한 친구 유형',
    img: 'icon/ui/heart.svg',
  },
  [TYPE_QUERY.bad]: {
    text: '다음',
    label: '내 기준에서 벗어난 친구',
    title: '벗어난 친구 유형',
    subLabel: '기피하는 친구 유형',
    img: 'icon/ui/broken-heart.svg',
  },
};
