import type { ICharacterImage, IFriendBody, IFriendList, IFriendModifyRequestBody } from '@interfaces/friend';

import { ResponseAPI, ResponseDTO } from '../common';
import { http } from '@libs/http.client';

const friendApi = {
  /**
   * @description 등록한 친구 목록 조회 client api
   */
  get: async() => http.get<ResponseDTO<IFriendList>>('/friend'),

  /**
   * @description 등록 친구 캐릭터 조회 client api
   */
  character: async () => await http.get<ResponseDTO<ICharacterImage>>('/character'),

  /**
   * @description 친구 등록 api
   */
  post: async (body: IFriendBody) => await http.post<ResponseAPI>('/friend', body),

  /**
   * @description 친구 이름 수정 api
   */
  namePatch: async (body: IFriendModifyRequestBody ) => await http.patch<ResponseAPI>(`/friend/${body.id}`, {name: body.name}),

  /**
   * @description 친구 관계 정리 api
   */
  friendPatch: async (id: number) => await http.patch<ResponseAPI>(`/friend/${id}/deactivate`)

};
export default friendApi;

