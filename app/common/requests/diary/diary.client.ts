import { IDiaryBody, IPostDiaryResponse } from '@interfaces/diary';

import { http } from '@libs/http.client';
import { ResponseDTO } from '@requests/common';

const diaryApi = {
  /**
   * @description 작성한 일화 생성 api
   */
  post: async (body: IDiaryBody) => {
    const { id, ...rest } = body;
    await http.post<ResponseDTO<IPostDiaryResponse>>(`/friend/${id}/diary`, rest);
  },
};
export default diaryApi;
