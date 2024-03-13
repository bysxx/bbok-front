import { IDiaryRequestBody } from '@interfaces/diary';

/**
 * 일화 다음 페이지로 이동 여부 반환 함수
 */
export const CheckNotNextPage = (diary: IDiaryRequestBody): boolean => {
  return diary.tags.length === 0 || !diary.content || !diary.date || !diary.emoji;
};
