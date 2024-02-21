import { FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { showErrorToast } from '@libs/showToast';
import { ResponseErrorApi } from '@requests/common';
import friendApi from '@requests/friend/friend.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useFriendMutation = () => {
  const queryClient = useQueryClient();
  const {push} = useCustomRouter();

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

  const patchFriend = useMutation({
    mutationFn: friendApi.namePatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('/');
    }
  })

  return {postfriend, patchFriend}
}
