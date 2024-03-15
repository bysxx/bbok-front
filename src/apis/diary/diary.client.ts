import {
  IDiaryBody,
  IDiaryDetailResponse,
  IDiaryListRequest,
  IDiaryListResponse,
  IDiaryTagReponse,
  IPostDiaryResponse,
  TDiaryModifyRequestBody,
} from '@interfaces/diary';

import { http } from '@libs/http.client';
import { ResponseDTO } from '@interfaces/common';
import { getQueryString } from '@libs/getQueryString';

const diaryApi = {
  /**
   * @description 작성한 일화 생성 api
   */
  post: async ({ id, ...rest }: IDiaryBody) => {
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

  /**
   * @description 일화 상세 조회
   */
  detail: async (id: number) => await http.get<ResponseDTO<IDiaryDetailResponse>>(`/friend/diary/detail/${id}`),

  /**
   * @description 일화 상세 삭제
   */
  delete: async (id: number) => await http.delete<ResponseDTO<string>>(`/friend/diary/${id}`),

  /**
   * @description 일화 상세 수정
   */
  patch: async ({ id, ...rest }: TDiaryModifyRequestBody) =>
    await http.patch<ResponseDTO<string>>(`/friend/diary/${id}`, rest),
};
export default diaryApi;
