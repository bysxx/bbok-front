import type { TEmoji } from '@constants/emoji';

/**
 * 일화 다음 페이지로 이동 여부 반환 함수
 */
export const CheckNotNextPage = ({
  content,
  date,
  emoji,
}: {
  content: string;
  date: string;
  emoji: TEmoji | null;
}): boolean => {
  return !content || (content && content.length === 0) || !date || !emoji;
};
