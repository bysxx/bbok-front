import type { IBookmarkListResponse } from '@interfaces/bookmark';
import type { ResponseAPI, ResponseDTO } from '@interfaces/common';
import { http } from '@libs/http.client';

const bookmarkApi = {
  /**
   * @description 북마크 리스트 받아오는 api 함수
   */
  get: async () => http.get<ResponseDTO<IBookmarkListResponse>>('/bookmark'),

  /**
   * @description 북마크 추가하는 api 함수
   */
  post: async (id: number) => http.post<ResponseAPI>('/bookmark', { id }),
};
export default bookmarkApi;
