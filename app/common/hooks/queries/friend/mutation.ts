import { FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { ResponseErrorApi } from '@requests/common';
import friendApi from '@requests/friend/friend.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const usePostFriend = () => {
  const queryClient = useQueryClient();
  const {push} = useCustomRouter();
  return useMutation({
    mutationFn: friendApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('/');
    },
    onError: (err) => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse?.data) {
        //console.log(errorResponse.data as ResponseErrorApi);
      }
      push('/');
      // TODO: 토스트 띄우기

    },
  });
};
