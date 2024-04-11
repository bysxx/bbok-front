export const TYPE_QUERY = {
  good: 'good',
  bad: 'bad',
} as const;
export type TQuery = keyof typeof TYPE_QUERY;
