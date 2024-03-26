import type { IMyCheckListResponse } from '@interfaces/checklist';
import type { ResponseAPI, ResponseDTO } from '@interfaces/common';
import type { IMyInfoRespone } from '@interfaces/member';
import { http } from '@libs/http.client';

const memberApi = {
  /**
   * @description 나만의 기준을 조회하는 api
   */
  getList: () => http.get<ResponseDTO<IMyCheckListResponse>>('/member/checklist'),

  /**
   * @description 내 정보 조회하는 api
   */
  get: () => http.get<ResponseDTO<IMyInfoRespone>>('/member'),

  /**
   * @description 내 계정 삭제하는 api
   */
  delete: () => http.delete<ResponseAPI>('/member'),
};
export default memberApi;
