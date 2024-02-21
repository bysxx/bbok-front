import type { ICharacterImage, IFriendList } from '@interfaces/friend';

import { ResponseDTO } from '../common';
import { httpServer } from '@libs/http.server';



const friendServerApi = {
  /**
   * @description 등록한 친구 목록 조회 server api
   */
  get: async() => {
    const res = await httpServer.get<ResponseDTO<IFriendList>>('/friend'); 
    return res;
  },

  /**
   * @description 등록 친구 캐릭터 조회 server api
   */
  character: async () => {
    const res = await httpServer.get<ResponseDTO<ICharacterImage>>('/character');
    return res;
  }
};
export default friendServerApi;

