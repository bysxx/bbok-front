import { cookies } from 'next/headers';

import { CookieKey } from './cookieKey';

/**
 * 쿠키에서 아이템을 가져옴
 */
const getItemOrNull = async <T>(key: CookieKey): Promise<T | null> => {
  const cookieStore = cookies();
  try {
    const data = cookieStore.get(key)?.value;
    return data ? (data as T) : null;
  } catch (error) {
    return null;
  }
};

/**
 * 쿠키에 아이템을 저장
 */
const setItem = (key: CookieKey, items: string) => {
  const cookieStore = cookies();
  try {
    cookieStore.set(key, items);
  } catch (error) {
    // TODO: log 파일에 저장
  }
};

/**
 * refresh token 값 갱신
 */
export const setRefreshToken = (refreshToken: string) => {
  setItem(CookieKey.refreshToken, refreshToken);
};

/**
 * access token 값 갱신
 */
export const setAccessToken = (accessToken: string) => {
  setItem(CookieKey.accessToken, accessToken);
};

/**
 * refresh token 값 가져옴
 */
export const getRefreshToken = async () => {
  return getItemOrNull(CookieKey.refreshToken);
};

/**
 * access token 값 가져옴
 */
export const getAccessToken = () => {
  return getItemOrNull(CookieKey.accessToken);
};

/**
 * 최초 방문 여부 값 가져옴
 */
export const checkIsVisited = () => {
  const cookieStore = cookies();
  return cookieStore.get(CookieKey.isVisited)?.value;
};

/**
 * access token, refresh token 값 넣어줌
 */
export const setTokens = (accessToken: string, refreshToken: string) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};
