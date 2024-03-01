import { FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { showErrorToast, showSuccessToast } from '@libs/showToast';
import { ResponseErrorApi } from '@requests/common';
import friendApi from '@requests/friend/friend.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
    onError: (err) => {
      const errorResponse = (err as AxiosError).response;
      push('/');
      if (errorResponse?.data) {
        const error = errorResponse.data as ResponseErrorApi;
        showErrorToast(error.message);
      }
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
    },
  });

  return { postfriend, patchFriend, deleteFriend };
};
