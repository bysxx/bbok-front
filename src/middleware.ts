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
   * /diarylist/[id] id 값이 문자열이 포함된 경우 /diarylist 로 redirect
   * diarylist url param이 더 추가되면 /diarylist 로 route
   */
  if (request.nextUrl.pathname.startsWith('/diarylist')) {
    const [, , id, param, , step] = request.nextUrl.pathname.split('/');
    const isAllNumberString = (string: string) => /^\d+$/.test(string);
    if (id && !isAllNumberString(id)) return NextResponse.redirect(new URL('/diarylist', request.nextUrl));
    if ((param && param !== 'modify') || step)
      return NextResponse.redirect(new URL(`/diarylist/${id}`, request.nextUrl));
  }

  /**
   * writing url param이 더 추가되면 /writing/${tab} 로 route
   * /writing 존재하지 않은 페이지 -> /writing/emoji (defualt)
   */
  if (request.nextUrl.pathname.startsWith('/writing')) {
    const [, , tab, step] = request.nextUrl.pathname.split('/');
    if (step || !tab) return NextResponse.redirect(new URL(`/writing/${tab || 'emoji'}`, request.nextUrl));
  }

  /**
   * checklist url param 이 더 추가되면 /checklist/${tab} 으로 route
   * /checklist 존재하지 않은 페이지 -> /checklist/detail (defualt)
   */
  if (request.nextUrl.pathname.startsWith('/checklist')) {
    const [, , tab, step, param] = request.nextUrl.pathname.split('/');
    if (!tab) return NextResponse.redirect(new URL(`/checklist/${tab || 'detail'}`, request.nextUrl));
    if ((tab === 'create' || tab === 'detail') && step)
      return NextResponse.redirect(new URL(`/checklist/${tab}`, request.nextUrl));
    if (param) return NextResponse.redirect(new URL(`/checklist/${tab}/${step}`, request.nextUrl));
    if (tab === 'modify' && !step) return NextResponse.redirect(new URL(`/checklist/${tab}/good`, request.nextUrl));
  }

  /**
   * friend url param이 더 추가되면 /friend/modify 로 route
   */
  if (request.nextUrl.pathname.startsWith('/friend')) {
    const [, , tab, step] = request.nextUrl.pathname.split('/');
    if (step || !tab) return NextResponse.redirect(new URL(`/friend/${tab || 'create'}`, request.nextUrl));
  }

  /**
   * mypage url param이 더 추가되면 /mypage/account 로 route
   */
  if (request.nextUrl.pathname.startsWith('/mypage')) {
    const [, , tab, step] = request.nextUrl.pathname.split('/');
    if (step) return NextResponse.redirect(new URL(`/mypage/${tab}`, request.nextUrl));
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
    '/friend/:path+',
    '/mypage',
    '/mypage/:path+',
  ],
};
