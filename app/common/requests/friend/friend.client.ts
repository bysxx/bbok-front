import type { ICharacterImage, IFriendBody, IFriendList } from '@interfaces/friend';

import { ResponseDTO } from '../common';
import { http } from '@libs/http.client';

const friendApi = {
  /**
   * @description 등록한 친구 목록 조회 client api
   */
  get: async() => http.get<ResponseDTO<IFriendList>>('/friend'),

  /**
   * @description 등록 친구 캐릭터 조회 client api
   */
  character: async () => await http.get<ResponseDTO<ICharacterImage>>('/character')

};
export default friendApi;

// 친구 정보(이름, 캐릭터)를 등록
export const addFriend = async (body: IFriendBody) => {
  const res = await fetch('/friend', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res.json();
};

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
