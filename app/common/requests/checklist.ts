import type { ICheckList } from '@interfaces/checklist';

// 서비스에서 제공하는 체크리스트
export const getAllCheckList = async () => {
  const res = await fetch('/checklist');
  const data: ICheckList = await res.json();
  return data;
};

// 사용자가 체크리스트를 체크하거나, 혹은 등록
export const AddCheckList = async (body: ICheckList) => {
  const res = await fetch('/checklist', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res.json();
};
