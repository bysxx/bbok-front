import { ResponseDTO } from '@interfaces/common';
import { IDiaryDetailResponse, IDiaryTagReponse } from '@interfaces/diary';
import { httpServer } from '@libs/http.server';

const diaryServerApi = {
  tag: async (id: number) => {
    const res = await httpServer.get<ResponseDTO<IDiaryTagReponse>>(`/friend/${id}/tag`);
    return res;
  },
  detail: async (id: number) => {
    const res = await httpServer.get<ResponseDTO<IDiaryDetailResponse>>(`/friend/diary/detail/${id}`);
    return res;
  },
};
export default diaryServerApi;
