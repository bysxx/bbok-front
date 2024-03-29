export const enum LocalStorageKey {
  'checkVisited' = 'checkVisited',
  'activeFriend' = 'activeFriend',
  'saying' = 'saying',
}
export type TLocalStorageKey = keyof typeof LocalStorageKey;
