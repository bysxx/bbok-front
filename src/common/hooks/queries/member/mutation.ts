import memberApi from '@apis/member/member.client';
import { FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
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
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('/login');
      showSuccessToast('계정이 성공적으로 탈퇴되었어요');
    },
  });

  return { deleteMember };
};
