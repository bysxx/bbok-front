import { TBottomTab } from './enums';

interface IBottomContent {
  href: string;
  label: string;
  iconOn: string;
  iconOff: string;
  check: string[];
}

export const BOTTOM_TAP_ARRAY: TBottomTab[] = ['Home', 'Diary', 'Mypage'];

export const BOTTOM_TAP: { [key in TBottomTab]: IBottomContent } = {
  Home: {
    href: '/',
    label: '홈',
    iconOn: 'icon/bottom/home-on.svg',
    iconOff: 'icon/bottom/home-off.svg',
    check: ['/'],
  },
  Diary: {
    href: '/diarylist',
    label: '글쓰기',
    iconOn: 'icon/bottom/writing-on.svg',
    iconOff: 'icon/bottom/writing-off.svg',
    check: ['/diarylist', '/writing', '/writing/diary', '/writing/tag'],
  },
  Mypage: {
    href: '/mypage',
    label: '마이페이지',
    iconOn: 'icon/bottom/mypage-on.svg',
    iconOff: 'icon/bottom/mypage-off.svg',
    check: ['/mypage'],
  },
};
