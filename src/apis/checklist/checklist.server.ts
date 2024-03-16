import { ICheckList } from '@interfaces/checklist';
import { ResponseDTO } from '@interfaces/common';
import { httpServer } from '@libs/http.server';

const checklistServerApi = {
  get: async () => {
    const res = await httpServer.get<ResponseDTO<ICheckList>>('/checklist');
    return res;
  },
};
export default checklistServerApi;
