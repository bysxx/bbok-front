import { IMyCheckList } from '@interfaces/member';
import { httpServer } from '@libs/http.server';
import { ResponseDTO } from '@interfaces/common';

const memberServerApi = {
  /**
   * @description 나만의 기준을 조회하는 server api
   */
  getList: async () => {
    const res = await httpServer.get<ResponseDTO<IMyCheckList>>('/member/checklist');
    return res;
  },
};
export default memberServerApi;
