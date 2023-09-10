import type {
  IDiaryBody,
  IDiaryList,
  IDiaryListItem,
  IDiaryModifyBody,
  IDiaryResponse,
  IStickerList,
  ITagList,
} from '@interfaces/diary';

// 지금까지 작성된 태그 목록 조회
export const getTagList = async (id: string) => {
  const res = await fetch(`/friend/${id}/tag`);
  const data: ITagList = await res.json();
  return data;
};

// 친구와의 일화 목록을 조회
type DiaryProps = {
  id: number;
  offset: number;
  order: string;
  q: string;
  tag: string;
};

export const getFriendDiary = async ({ id, offset, order, q, tag }: DiaryProps) => {
  const res = await fetch(`/friend/${id}/diary?offset=${offset}&order=${order}&q=${q}&tag=${tag}`);
  const data: IDiaryList = await res.json();
  return data;
};

// 일화 상세 조회
export const getDetailFriendDiary = async (id: number) => {
  const res = await fetch(`/friend/diary/detail/${id}`);
  const data: IDiaryListItem = await res.json();
  return data;
};

// 다이어리 상세조회에서 스티커 목록을 제공
export const getDetailDiarySticker = async () => {
  const res = await fetch('/friend/diary/sticker');
  const data: IStickerList = await res.json();
  return data;
};

// 일화 생성
interface AddDiaryProp {
  id: number;
  body: IDiaryBody;
}

export const addDiary = async ({ id, body }: AddDiaryProp) => {
  const res = await fetch(`/friend/${id}/diary`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  const data: IDiaryResponse = await res.json();
  return data;
};

// 일화 수정
interface ModifyDiaryProp {
  id: number;
  body: IDiaryModifyBody;
}
export const modifyDiary = async ({ id, body }: ModifyDiaryProp) => {
  const res = await fetch(`/friend/diary/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
  return res.json();
};

// 일화 삭제
export const removeDiary = async (id: number) => {
  const res = await fetch(`/friend/diary/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
