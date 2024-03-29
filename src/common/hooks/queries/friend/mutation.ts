import friendApi from '@apis/friend/friend.client';
import { FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { clearDeleteFriend } from '@libs/local-storage/localStorage';
import { showSuccessToast } from '@libs/showToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useFriendMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useCustomRouter();

  /**
   * 친구 등록
   */
  const postfriend = useMutation({
    mutationFn: friendApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('/');
    },
  });

  /**
   * 친구 이름 수정
   */
  const patchFriend = useMutation({
    mutationFn: friendApi.namePatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('/');
    },
  });

  /**
   * 친구 관계 정리
   */
  const deleteFriend = useMutation({
    mutationFn: friendApi.friendPatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('/');
      showSuccessToast('관계 정리가 완료됐어요. 새일기장을 추가해보세요.');
      clearDeleteFriend();
    },
  });

  return { postfriend, patchFriend, deleteFriend };
};
