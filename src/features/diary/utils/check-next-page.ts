import type { TEmoji } from '@interfaces/enums';

/**
 * 일화 다음 페이지로 이동 여부 반환 함수
 */
export const CheckNotNextPage = ({
  tags,
  content,
  date,
  emoji,
}: {
  tags: null | string[];
  content: string;
  date: string;
  emoji: TEmoji | null;
}): boolean => {
  return !tags || (tags && tags.length === 0) || content.length === 0 || !date || !emoji;
};
