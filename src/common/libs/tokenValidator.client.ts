// eslint-disable-next-line import/no-cycle
import authApi from '@apis/auth';
import { setCookie } from 'cookies-next';

export const getAccessTokenClient = async (refreshToken: string): Promise<null | string> => {
  try {
    if (refreshToken) {
      // token refresh 로직 처리
      const data = await authApi.reissue(refreshToken);
      setCookie('accessToken', data.data.accessToken);
      setCookie('refreshToken', data.data.refreshToken);

      return data.data.accessToken;
    }
    return null;
  } catch (e) {
    // TODO: 에러 타입 지정
    // return e as ApiError;
    return null;
  }
};
