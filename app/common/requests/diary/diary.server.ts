import { IDiaryListRequest, IDiaryListResponse } from '@interfaces/diary';
import { httpServer } from '@libs/http.server';
import { ResponseDTO } from '@requests/common';

const diaryServerApi = {
  /**
   * @description 일화 리스트 조회 api
   */
  list: async (body: IDiaryListRequest) => {
    const res = await httpServer.get<ResponseDTO<IDiaryListResponse>>(
      `/friend/${body.id}/diary?offset=${body.offset}&order=${body.order}&q=${body.q}&tag=${body.tag}`,
    );
    return res;
  },
};
export default diaryServerApi;
