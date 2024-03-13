import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  const isVisited = cookieStore.get('isVisited');
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
