// 토큰 재발급 type
export interface IExpireToken {
  accessToken: string;
  refreshToken: string;
}

// 카카오 로그인 후 토큰 발급 type
export interface ILoginToken extends IExpireToken {
  memberId: string;
}
