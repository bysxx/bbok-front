import bookmarkApi from '@apis/bookmark/bookmark.client';
import { BOOKMARK_KEYS } from '@constants/queryKeys';
import type { IBookmarkListResponse } from '@interfaces/bookmark';
import type { ResponseDTO } from '@interfaces/common';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useGetBookmarkList = () => {
  return useQuery<ResponseDTO<IBookmarkListResponse>, AxiosError>({
    queryKey: BOOKMARK_KEYS.lists(),
    queryFn: bookmarkApi.get,
  });
};
