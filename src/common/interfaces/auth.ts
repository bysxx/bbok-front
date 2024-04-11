import type { TAuth } from '@constants/auth';

/**
 * 토큰 재발 reponse type
 */
export interface IExpireToken {
  accessToken: string;
  refreshToken: string;
}

/**
 * 로그인 reponse type
 */
export interface ILoginToken extends IExpireToken {
  memberId: string;
  newMember: boolean;
  provider: TAuth;
}
