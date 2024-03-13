import { MEMBER_KEYS } from '@constants/queryKeys';
import { IMyCheckList, IMyInfoRespone } from '@interfaces/member';
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

export const useGetMyInfo = () => {
  return useQuery<ResponseDTO<IMyInfoRespone>, AxiosError>({
    queryKey: MEMBER_KEYS.details(),
    queryFn: memberApi.get,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
