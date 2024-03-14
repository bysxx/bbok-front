import {
  IDiaryBody,
  IDiaryListRequest,
  IDiaryListResponse,
  IDiaryTagReponse,
  IPostDiaryResponse,
} from '@interfaces/diary';

import { http } from '@libs/http.client';
import { ResponseDTO } from '@interfaces/common';
import { getQueryString } from '@libs/getQueryString';

const diaryApi = {
  /**
   * @description 작성한 일화 생성 api
   */
  post: async (body: IDiaryBody) => {
    const { id, ...rest } = body;
    await http.post<ResponseDTO<IPostDiaryResponse>>(`/friend/${id}/diary`, rest);
  },
  /**
   * @description 일화 리스트 조회 api
   */
  list: async (body: IDiaryListRequest) => {
    const { id, ...rest } = body;
    const query = rest ? getQueryString(rest) : '';
    return await http.get<ResponseDTO<IDiaryListResponse>>(`/friend/${id}/diary?${query}`);
  },

  /**
   * @description 일화 태그 목록 조회
   */
  tag: async (id: number) => await http.get<ResponseDTO<IDiaryTagReponse>>(`/friend/${id}/tag`),
};
export default diaryApi;
