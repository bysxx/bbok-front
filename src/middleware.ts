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
  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/checklist', '/criteria', '/diarylist', '/friend', '/mypage'],
};
