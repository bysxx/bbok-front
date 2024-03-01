import { FRIEND_KEYS } from '@constants/queryKeys';
import { ICharacterImage, IFriendList } from '@interfaces/friend';
import { ResponseDTO } from '@requests/common';
import friendApi from '@requests/friend/friend.client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetFriend = () => {
  return useQuery<ResponseDTO<IFriendList>, AxiosError>({
    queryKey: FRIEND_KEYS.lists(),
    queryFn: friendApi.get,
  });
};

export const useGetFriendCharater = () => {
  return useQuery<ResponseDTO<ICharacterImage>, AxiosError>({
    queryKey: FRIEND_KEYS.details(),
    queryFn: friendApi.character,
  });
};
