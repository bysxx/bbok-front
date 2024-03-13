import type { TMypageTab } from '@interfaces/enums';
import { MypageTab } from '@interfaces/enums';

export const TAP_LIST: ITabContent[] = [
  {
    label: '글귀/명언 북마크',
    value: MypageTab.bookmark,
  },
  {
    label: '로그아웃',
    value: MypageTab.logout,
  },
  {
    label: '서비스 문의',
    value: MypageTab.service,
  },
  {
    label: '내 계정',
    value: MypageTab.account,
  },
];

interface ITabContent {
  label: string;
  value: TMypageTab;
}
