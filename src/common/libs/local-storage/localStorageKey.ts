export const enum LocalStorageKey {
  'homeTooltip' = 'homeTooltip',
  'activeFriend' = 'activeFriend',
  'saying' = 'saying',
}
export type TLocalStorageKey = keyof typeof LocalStorageKey;
