import { showErrorToast, showSuccessToast } from './showToast';

export const copyClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);

    showSuccessToast('이메일 복사 완료');
  } catch (error) {
    showErrorToast('이메일 복사 실패');
  }
};
