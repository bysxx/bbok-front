import type { IBookmarkListResponse } from '@interfaces/bookmark';
import type { ResponseDTO } from '@interfaces/common';
import { httpServer } from '@libs/http.server';

const bookmarkServerApi = {
  get: async () => {
    const res = await httpServer.get<ResponseDTO<IBookmarkListResponse>>('/bookmark');
    return res;
  },
};
export default bookmarkServerApi;
