export const enum MypageTab {
  'bookmark' = 'bookmark',
  'logout' = 'logout',
  'service' = 'service',
  'account' = 'account',
}

export type TMypageTab = keyof typeof MypageTab;
