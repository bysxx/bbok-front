import type { IMyCheckList, IMyCheckListBody, IMyProfile } from '@interfaces/mypage';

// 마이페이지에서 보여줄 프로필 이미지 url과 uuid 정보 조회
export const getMyProfile = async () => {
  const res = await fetch('/member');
  const data: IMyProfile = await res.json();
  return data;
};

// 내가 설정한 체크리스트 기준을 조회
export const getMyCheckList = async () => {
  const res = await fetch('/member/checklist');
  const data: IMyCheckList = await res.json();
  return data;
};

// 나의 체크리스트 기준 수정
export const ModifyMyCheckList = async (body: IMyCheckListBody) => {
  const res = await fetch('/member/checklist', {
    method: 'PATH',
    body: JSON.stringify(body),
  });
  return res.json();
};
