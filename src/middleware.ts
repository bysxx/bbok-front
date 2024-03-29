import { checkIsVisited, getAccessToken } from '@libs/cookie/manageCookie.server';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const accessToken = getAccessToken();
  const isVisited = checkIsVisited();

  if (!isVisited) {
    return NextResponse.redirect(new URL(`/landing`, request.nextUrl));
  }
  if (!accessToken) {
    return NextResponse.redirect(new URL(`/login`, request.nextUrl));
  }

  /**
   * /diarylist/[id] id 값이 문자열 인 경우 /diarylist 로 redirect
   */
  if (request.nextUrl.pathname.startsWith('/diarylist')) {
    const [, , id] = request.nextUrl.pathname.split('/');
    const isAllNumberString = (string: string) => /^\d+$/.test(string);
    if (id && !isAllNumberString(id)) return NextResponse.redirect(new URL('/diarylist', request.nextUrl));
  }

  /**
   * diarylist url param이 더 추가되면 /diarylist 로 route
   */
  if (request.nextUrl.pathname.startsWith('/diarylist')) {
    const [, , , , , step] = request.nextUrl.pathname.split('/');
    if (step) return NextResponse.redirect(new URL(`/diarylist`, request.nextUrl));
  }

  /**
   * /writing/tag/.... -> /writing/tag
   */
  if (request.nextUrl.pathname.startsWith('/writing')) {
    const [, , tab, step] = request.nextUrl.pathname.split('/');
    if (step || !tab) return NextResponse.redirect(new URL(`/writing/${tab || 'emoji'}`, request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/',
    '/checklist',
    '/checklist/:path+',
    '/diarylist',
    '/writing',
    '/writing/:path+',
    '/diarylist/:path+',
    '/friend',
    '/mypage',
  ],
};
