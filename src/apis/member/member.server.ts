import { IMyInfoRespone } from '@interfaces/member';
import { httpServer } from '@libs/http.server';
import { ResponseDTO } from '@interfaces/common';
import { IMyCheckListResponse } from '@interfaces/checklist';

const memberServerApi = {
  /**
   * @description 나만의 기준을 조회하는 server api
   */
  getList: async () => {
    const res = await httpServer.get<ResponseDTO<IMyCheckListResponse>>('/member/checklist');
    return res;
  },

  /**
   * @description 내 정보 조회하는 server api
   */
  get: async () => {
    const res = await httpServer.get<ResponseDTO<IMyInfoRespone>>('/member');
    return res;
  },
};
export default memberServerApi;
