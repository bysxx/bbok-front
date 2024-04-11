export const ACCOUNT_TAB = {
  widthDraw: 'widthDraw',
  initial: 'initial',
} as const;

export const MYPAGE_TAB = {
  bookmark: 'bookmark',
  logout: 'logout',
  service: 'service',
  account: 'account',
} as const;

export const TAP_LIST: ITabContent[] = [
  {
    label: '글귀/명언 북마크',
    value: MYPAGE_TAB.bookmark,
  },
  {
    label: '로그아웃',
    value: MYPAGE_TAB.logout,
  },
  {
    label: '서비스 문의',
    value: MYPAGE_TAB.service,
  },
  {
    label: '내 계정',
    value: MYPAGE_TAB.account,
  },
];

export const ACCOUNT_TAB_LIST = [
  {
    label: '서비스 초기화',
    value: ACCOUNT_TAB.initial,
  },
  {
    label: '서비스 탈퇴',
    value: ACCOUNT_TAB.widthDraw,
  },
];

interface ITabContent {
  label: string;
  value: string;
}
