import authApi from '@apis/auth';
import { cookies } from 'next/headers';

export const getAccessTokenServer = async (refreshToken: string): Promise<null | string> => {
  try {
    if (refreshToken) {
      // token refresh 로직 처리
      const data = await authApi.reissue(refreshToken);
      const cookieStore = cookies();
      cookieStore.set('accessToken', data.data.accessToken);
      cookieStore.set('refreshToken', data.data.refreshToken);

      return data.data.accessToken;
    }
    return null;
  } catch (e) {
    // TODO: 에러 타입 지정
    // return e as ApiError;
    return null;
  }
};
