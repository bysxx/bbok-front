import memberApi from '@apis/member/member.client';
import { CHECKLIST_KEYS, DIARY_KEYS, FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { clearIsVisited, clearTokens } from '@libs/cookie/manageCookie.client';
import { clearLocalStorage } from '@libs/local-storage/localStorage';
import { showSuccessToast } from '@libs/showToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMemberMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useCustomRouter();

  /**
   * 계정 초기화
   */
  const deleteMember = useMutation({
    mutationFn: memberApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.all });
      queryClient.invalidateQueries({ queryKey: DIARY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: CHECKLIST_KEYS.all });
      // 쿠키 삭제
      clearTokens();
      clearIsVisited();
      // 로컬 스토리지 값 초기화
      clearLocalStorage();
      push('/landing');
      showSuccessToast('계정이 성공적으로 탈퇴되었어요');
    },
  });

  return { deleteMember };
};
