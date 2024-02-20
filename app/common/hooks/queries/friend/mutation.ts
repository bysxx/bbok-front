import { FRIEND_KEYS } from '@constants/queryKeys';
import friendApi from '@requests/friend/friend.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: friendApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
    },
  });
};
