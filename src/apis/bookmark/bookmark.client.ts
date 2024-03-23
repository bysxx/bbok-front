import type { IBookmarkListResponse } from '@interfaces/bookmark';
import type { ResponseDTO } from '@interfaces/common';
import { http } from '@libs/http.client';

const bookmarkApi = {
  /**
   * @description 북마크 리스트 받아오는 api 함수
   */
  get: async () => http.get<ResponseDTO<IBookmarkListResponse>>('/bookmark'),
};
export default bookmarkApi;
