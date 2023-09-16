import type { IBookmarkList } from '@interfaces/bookmark';

// 마음에 든 명언을 북마크로 저장
export const AddSayingBookmark = async (id: number) => {
  const body = {
    id,
  };
  const res = await fetch('/bookmark', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res.json();
};

// 북마크 정보를 조회
export const getBookmarkList = async () => {
  const res = await fetch('/bookmark');
  const data: IBookmarkList = await res.json();
  return data;
};

// 북마크 취소(마이페이지-북마크)
export const removeBookmark = async (id: number) => {
  const res = await fetch(`/bookmark/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
