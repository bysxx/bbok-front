import { FRIEND_KEYS } from '@constants/queryKeys';
import friendApi from '@requests/friend/friend.client';
import { useQuery } from '@tanstack/react-query';

export const useGetFriend = () => {
  return useQuery({
    queryKey: FRIEND_KEYS.lists(),
    queryFn: friendApi.get,
  });
};
