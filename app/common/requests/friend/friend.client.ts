import type { ICharacterImage, IFriendBody, IFriendList } from '@interfaces/friend';

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
  post: async (body: IFriendBody) => http.post<ResponseAPI>('/friend', body)

};
export default friendApi;

// 친구의 이름을 수정
export const modifyFriendName = async (id: number, name: string) => {
  const body = {
    name,
  };
  const res = await fetch(`/friend/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
  return res.json();
};

// 친구와의 일화 기록을 정리 (친구 비활성화)
export const deactivateFriend = async (id: number) => {
  const res = await fetch(`/friend/${id}/deactivate`, {
    method: 'PATCH',
  });
  return res.json();
};
