import type { IExpireToken, ILoginToken } from '@interfaces/auth';
import { getRefreshToken, setTokens } from '@libs/cookie';
// eslint-disable-next-line import/no-cycle
import { httpWithoutToken } from '@libs/http.client';

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
      const refreshToken = await getRefreshToken();

      const res = await httpWithoutToken.get<ResponseDTO<IExpireToken>>(`/jwt/refresh?refreshToken=${refreshToken}`);
      setTokens(res.data.accessToken, res.data.refreshToken);
      return true;
    } catch {
      return false;
    }
  },

  reissue: async (refreshToken: string) =>
    httpWithoutToken.get<ResponseDTO<IExpireToken>>(`/jwt/refresh?refreshToken=${refreshToken}`),
};
export default authApi;
