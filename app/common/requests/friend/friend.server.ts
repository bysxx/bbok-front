import type { IFriendList } from '@interfaces/friend';

import { ResponseDTO } from '../common';
import { httpServer } from '@libs/http.server';



const friendServerApi = {
  /**
   * @description 등록한 친구 목록 조회 server api
   */
  get: async() => {
    const res = await httpServer.get<ResponseDTO<IFriendList>>('/friend'); 
    return res.data;
  }
};
export default friendServerApi;

