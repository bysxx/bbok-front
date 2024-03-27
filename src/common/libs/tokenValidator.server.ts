import authApi from '@apis/auth';

import { setTokens } from './cookie/manageCookie.server';

export const getAccessTokenServer = async (refreshToken: string | unknown): Promise<null | string> => {
  try {
    if (refreshToken) {
      // token refresh 로직 처리
      const data = await authApi.reissue(refreshToken as string);
      setTokens(data.data.accessToken, data.data.refreshToken);

      return data.data.accessToken;
    }
    return null;
  } catch (e) {
    // TODO: 에러 타입 지정
    // return e as ApiError;
    return null;
  }
};
