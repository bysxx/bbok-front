import { IDiaryBody, IDiaryListRequest, IDiaryListResponse, IPostDiaryResponse } from '@interfaces/diary';

import { http } from '@libs/http.client';
import { ResponseDTO } from '@interfaces/common';

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
  list: async (body: IDiaryListRequest) =>
    await http.get<ResponseDTO<IDiaryListResponse>>(
      `/friend/${body.id}/diary?offset=${body.offset}&order=${body.order}&q=${body.q}&tag=${body.tag}`,
    ),
};
export default diaryApi;
