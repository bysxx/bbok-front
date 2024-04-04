import memberApi from '@apis/member/member.client';
import { MEMBER_KEYS } from '@constants/queryKeys';
import type { IMyCheckListResponse } from '@interfaces/checklist';
import type { ResponseDTO } from '@interfaces/common';
import type { IMyInfoRespone } from '@interfaces/member';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useGetMyChecklist = () => {
  return useQuery<ResponseDTO<IMyCheckListResponse>, AxiosError>({
    queryKey: MEMBER_KEYS.lists(),
    queryFn: memberApi.getList,
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
