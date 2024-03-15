import diaryApi from '@apis/diary/diary.client';
import { DIARY_KEYS, FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDiaryMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useCustomRouter();
  /**
   * 일화 등록
   */
  const postDiary = useMutation({
    mutationFn: diaryApi.post,
    onSuccess: () => {
      // 친구 리스트 바로 실행
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      queryClient.invalidateQueries({ queryKey: DIARY_KEYS.all });
      push('./diarylist');
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
    },
  });

  return { postDiary, deleteDiary };
};
