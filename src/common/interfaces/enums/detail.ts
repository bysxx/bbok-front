export const enum DetailOption {
  'sticker' = 'sticker',
  'diary' = 'diary',
  'checklist' = 'checklist',
  'delete' = 'delete',
}
export type TDetailOption = keyof typeof DetailOption;
