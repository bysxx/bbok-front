import { IMyCheckList } from '@interfaces/member';
import { http } from '@libs/http.client';
import { ResponseDTO } from '@interfaces/common';

const memberApi = {
  /**
   * @description 나만의 기준을 조회하는 api
   */
  getList: () => http.get<ResponseDTO<IMyCheckList>>('/member/checklist'),
};
export default memberApi;
