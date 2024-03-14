import { DIARY_KEYS } from '@constants/queryKeys';
import { IDiaryInfiniteRequest, IDiaryListResponse } from '@interfaces/diary';

import { ResponseDTO } from '@interfaces/common';
import diaryApi from '@apis/diary/diary.client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetDiaryList = (body: IDiaryInfiniteRequest) => {
  return useInfiniteQuery<ResponseDTO<IDiaryListResponse>, AxiosError>({
    queryKey: DIARY_KEYS.list([{ ...body }]),
    queryFn: ({ pageParam = 0 }) => diaryApi.list({ ...body, offset: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.data.pageNumber === lastPage.data.totalPages - 1 ? undefined : lastPage.data.pageNumber + 1;
    },
  });
};
