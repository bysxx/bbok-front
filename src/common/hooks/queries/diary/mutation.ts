import diaryApi from '@apis/diary/diary.client';
import { DIARY_KEYS, FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import type { ResponseDTO } from '@interfaces/common';
import type { IPostDiaryResponse } from '@interfaces/diary';
import { showSuccessToast } from '@libs/showToast';
import { useSayingStore } from '@stores/useSayingStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDiaryMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useCustomRouter();
  const { setSaying } = useSayingStore();
  /**
   * 일화 등록
   */
  const postDiary = useMutation({
    mutationFn: diaryApi.post,
    onSuccess: (data: ResponseDTO<IPostDiaryResponse>) => {
      // 친구 리스트 바로 실행
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: DIARY_KEYS.all });
      push('./distance');

      setSaying(data.data);
    },
  });

  /**
   * 일화 삭제
   */
  const deleteDiary = useMutation({
    mutationFn: diaryApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: DIARY_KEYS.all });
      push('/diarylist');
      showSuccessToast('일화가 삭제되었어요');
    },
  });

  /**
   * 일화 수정
   */
  const patchDiary = useMutation({
    mutationFn: diaryApi.patch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DIARY_KEYS.all });
      showSuccessToast('일화 수정이 완료되었어요');
    },
  });

  return { postDiary, deleteDiary, patchDiary };
};
