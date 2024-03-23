import { IMyInfoRespone } from '@interfaces/member';
import { http } from '@libs/http.client';
import { ResponseDTO } from '@interfaces/common';
import { IMyCheckListResponse } from '@interfaces/checklist';

const memberApi = {
  /**
   * @description 나만의 기준을 조회하는 api
   */
  getList: () => http.get<ResponseDTO<IMyCheckListResponse>>('/member/checklist'),

  /**
   * @description 내 정보 조회하는 server api
   */
  get: () => http.get<ResponseDTO<IMyInfoRespone>>('/member'),
};
export default memberApi;
