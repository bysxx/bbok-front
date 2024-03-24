import diaryApi from '@apis/diary/diary.client';
import { DIARY_KEYS } from '@constants/queryKeys';
import type { ResponseDTO } from '@interfaces/common';
import type {
  IDiaryDetailResponse,
  IDiaryInfiniteRequest,
  IDiaryListResponse,
  IDiaryTagReponse,
} from '@interfaces/diary';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useGetDiaryListInfiniteQuery = (body: IDiaryInfiniteRequest) => {
  return useInfiniteQuery<ResponseDTO<IDiaryListResponse>, AxiosError>({
    queryKey: DIARY_KEYS.list([{ ...body }]),
    queryFn: ({ pageParam = 0 }) => diaryApi.list({ ...body, offset: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.pageNumber === lastPage.data.totalPages - 1 || lastPage.data.totalPages === 0) {
        return undefined;
      }
      return lastPage.data.pageNumber + 1;
    },
  });
};

export const useGetDiaryTagList = (id: number) => {
  return useQuery<ResponseDTO<IDiaryTagReponse>, AxiosError>({
    queryKey: DIARY_KEYS.list([{ id }]),
    queryFn: () => diaryApi.tag(id),
  });
};

export const useGetDiaryDetail = (id: number) => {
  return useQuery<ResponseDTO<IDiaryDetailResponse>, AxiosError>({
    queryKey: DIARY_KEYS.detail([{ id }]),
    queryFn: () => diaryApi.detail(id),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
