import type { IExpireToken, ILoginToken } from '@interfaces/auth';
import { baseUrl } from '@libs/config';

import type { ResponseDTO } from './common';

// 사용자가 정보를 입력하면, redirect url로 넘어갑니다
export const loginKakao = async () => {
  const res = await fetch(`${baseUrl}/kakao/login`);
  return res.json();
};

// 카카오 정보를 저장하고 해당 멤버 Id와 accessToken, refreshToken을 받기
// 인자에 카카오에서 받을 인카코드 넣어주기
export const getLoginToken = async (code: string, redirectUri: string) => {
  const res = await fetch(`${baseUrl}/kakao?code=${code}&redirectUri=${redirectUri}`);
  const data: ResponseDTO<ILoginToken> = await res.json();
  return data;
};

// accessToken이 만료됐을 때, refreshToken으로 재발급
// -> refreshToken expire가 3일 이하 남으면 둘 다 재발급
// -> refreshToken expire가 3일보다 많이 남으면 accessToken만 재발급
export const getExpiredToken = async (refreshToken: string) => {
  const res = await fetch(`/jwt/refresh?refreshToken=${refreshToken}`);
  const data: IExpireToken = await res.json();
  return data;
};

// jwt가 올바른지 체크
export const checkValidToken = async () => {
  const res = await fetch('/member/token/validation');
  return res.json();
};

// 게스트로 가입
export const loginGuest = async () => {
  const res = await fetch('/guest/login', {
    method: 'POST',
  });
  const data: ILoginToken = await res.json();
  return data;
};
