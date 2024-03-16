export const enum TypeQuery {
  'good' = 'good',
  'bad' = 'bad',
}
export type TQuery = keyof typeof TypeQuery;
