import type { ICharacterImage, IFriendBody, IFriendList } from '@interfaces/friend';

// 친구 정보(이름, 캐릭터)를 등록
export const addFriend = async (body: IFriendBody) => {
  const res = await fetch('/friend', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res.json();
};

// 등록한 친구 목록을 조회
export const getFriendList = async () => {
  const res = await fetch('/friend');
  const data: IFriendList = await res.json();
  return data;
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

// 캐릭터 이미지 제공
export const getCharacterImage = async () => {
  const res = await fetch('/character');
  const data: ICharacterImage = await res.json();
  return data;
};
