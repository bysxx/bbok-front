export const DATE_OPTIONS = {
  desc: '최신순',
  asc: '오래된순',
} as const;
export type TDate = keyof typeof DATE_OPTIONS;
