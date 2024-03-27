export const enum CookieKey {
  'accessToken' = 'accessToken',
  'refreshToken' = 'refreshToken',
  'isVisited' = 'isVisited',
}
export type TCookieKey = keyof typeof CookieKey;
