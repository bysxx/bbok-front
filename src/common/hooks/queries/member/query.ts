import { MEMBER_KEYS } from '@constants/queryKeys';
import { IMyCheckList } from '@interfaces/member';
import { ResponseDTO } from '@interfaces/common';
import memberApi from '@apis/member/member.client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetMyChecklist = () => {
  return useQuery<ResponseDTO<IMyCheckList>, AxiosError>({
    queryKey: MEMBER_KEYS.lists(),
    queryFn: memberApi.getList,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};