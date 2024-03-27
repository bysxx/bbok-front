import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import { CookieKey } from './cookieKey';

/**
 * 쿠키에서 아이템을 가져옴
 */
const getItemOrNull = async <T>(key: CookieKey): Promise<T | null> => {
  try {
    const data = getCookie(key);
    return data ? (data as T) : null;
  } catch (error) {
    return null;
  }
};

/**
 * 쿠키에 아이템을 저장
 */
const setItem = <T>(key: CookieKey, items: T) => {
  try {
    setCookie(key, items);
  } catch (error) {
    // TODO: log 파일에 저장
  }
};

/**
 * refresh token 값을 가져옴
 */
export const getRefreshToken = async () => {
  return getItemOrNull<string>(CookieKey.refreshToken);
};

/**
 * refresh token 값을 갱신
 */
const setRefreshToken = (refreshToken: string) => {
  setItem<string>(CookieKey.refreshToken, refreshToken);
};

/**
 * access token 값을 가져옴
 */
export const getAccessToken = async () => {
  return getItemOrNull<string>(CookieKey.accessToken);
};

/**
 * access token 값을 갱신
 */
const setAccessToken = (accessToken: string) => {
  setItem<string>(CookieKey.accessToken, accessToken);
};

/**
 * 최초 방문 여부를 확인
 */
export const checkIsVisted = () => {
  return !!getItemOrNull<boolean>(CookieKey.isVisited);
};

/**
 * 최초 방문 여부 값을 갱신
 */
export const setIsVisited = (value: boolean) => {
  setItem<boolean>(CookieKey.isVisited, value);
};

/**
 * 최초 방문 여부 값 삭제
 */
export const clearIsVisited = () => {
  deleteCookie(CookieKey.isVisited);
};
/**
 * access token, refresh token 값 삭제
 */
export const clearTokens = () => {
  deleteCookie(CookieKey.accessToken);
  deleteCookie(CookieKey.refreshToken);
};

/**
 * access token, refresh token 값 넣어줌
 */
export const setTokens = (accessToken: string, refreshToken: string) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};
