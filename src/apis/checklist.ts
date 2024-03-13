import type { ICheckList } from '@interfaces/checklist';
import { http } from '@libs/http.client';

import type { ResponseAPI, ResponseDTO } from '../common/interfaces/common';

const checklistApi = {
  /**
   * @description 서비스에서 제공하는 체크리스트 받아오는 api 함수
   */
  allchecklist: async () => http.get<ResponseDTO<ICheckList>>('/checklist', { method: 'GET' }),

  /**
   * @description 체크리스트 등록
   */
  postChecklist: async (body: ICheckList) => http.post<ResponseAPI>('/checklist', body),
};

export default checklistApi;
