import type { ResponseErrorApi } from '@interfaces/common';
import { showErrorToast } from '@libs/showToast';
import axios from 'axios';
import { useCallback } from 'react';

import useCustomRouter from './useCustomRouter';

export const useApiError = () => {
  const { push } = useCustomRouter();
  const handleError = useCallback((error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ResponseErrorApi;
        const httpStatus = data.status;
        const httpMessage = data.message;
        const httpErrorCode = data.code;

        switch (httpStatus) {
          case 400:
            if (httpErrorCode === 'F002') {
              push('/');
              showErrorToast(httpMessage);
              break;
            } else {
              showErrorToast(httpMessage);
              break;
            }
          case 401:
            if (httpErrorCode === 'J002') {
              push('/login');
              showErrorToast('로그인 다시 시도해주세요.');
              break;
            } else {
              showErrorToast(httpMessage);
              break;
            }
          case 404:
            if (httpErrorCode === 'D003') {
              push('/diarylist');
              showErrorToast(httpMessage);
              break;
            } else {
              showErrorToast(httpMessage);
              break;
            }
          case 500:
            showErrorToast('서버 일시적인 문제가 발생했습니다. 잠시후 다시 시도해주세요');
            break;
          default:
            showErrorToast('서버 일시적인 문제가 발생했습니다. 잠시후 다시 시도해주세요');
        }
      }
    }
  }, []);

  return { handleError };
};
