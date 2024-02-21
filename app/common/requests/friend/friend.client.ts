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
  post: async (body: IFriendBody) => http.post<ResponseAPI>('/friend', body),

  /**
   * @description 친구 이름 수정 api
   */
  namePatch: async (body: IFriendModifyRequestBody ) => await http.patch<ResponseAPI>(`/friend/${body.id}`, {name: body.name})

};
export default friendApi;

// 친구와의 일화 기록을 정리 (친구 비활성화)
export const deactivateFriend = async (id: number) => {
  const res = await fetch(`/friend/${id}/deactivate`, {
    method: 'PATCH',
  });
  return res.json();
};
