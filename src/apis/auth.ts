import type { IExpireToken, ILoginToken } from '@interfaces/auth';
// eslint-disable-next-line import/no-cycle
import { httpWithoutToken } from '@libs/http.client';
// eslint-disable-next-line import/no-cycle
import { getCookie, setCookie } from 'cookies-next';

import type { ResponseDTO } from '../common/interfaces/common';

const authApi = {
  /**
   * @description 카카오 계정 로그인
   */
  signIn: async (code: string, redirectUri: string) =>
    httpWithoutToken.get<ResponseDTO<ILoginToken>>(`/kakao?code=${code}&redirectUri=${redirectUri}`),

  /**
   * @description refresh 토큰으로 access 토큰 재발급
   */
  refresh: async (): Promise<boolean> => {
    try {
      const refreshToken = getCookie('refreshToken') as string;
      const res = await httpWithoutToken.get<ResponseDTO<IExpireToken>>(`/jwt/refresh?refreshToken=${refreshToken}`);
      setCookie('refreshToken', res.data.refreshToken);
      setCookie('accessToken', res.data.accessToken);
      return true;
    } catch {
      return false;
    }
  },

  reissue: async (refreshToken: string) =>
    httpWithoutToken.get<ResponseDTO<IExpireToken>>(`/jwt/refresh?refreshToken=${refreshToken}`),
};
export default authApi;
