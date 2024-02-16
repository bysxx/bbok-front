import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  if (!accessToken) {
    return NextResponse.redirect(new URL(`/login`, request.nextUrl));
  }
};

export const config = {
  matcher: ['/', '/landing', '/checklist', '/criteria', '/diarylist', '/friend', '/mypage'],
};
