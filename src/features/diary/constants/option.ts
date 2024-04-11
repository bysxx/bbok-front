export const DETAIL_OPTION = {
  sticker: 'sticker',
  diary: 'diary',
  checklist: 'checklist',
  delete: 'delete',
} as const;
export type TDetailOption = keyof typeof DETAIL_OPTION;
export type TValueOfCharacter = (typeof DETAIL_OPTION)[TDetailOption];

export const DETAIL_OPTIONS: { label: string; image: string; value: TDetailOption }[] = [
  {
    label: '스티커',
    image: 'icon/ui/sticker.svg',
    value: DETAIL_OPTION.sticker,
  },
  {
    label: '수정',
    image: 'icon/ui/edit.svg',
    value: DETAIL_OPTION.diary,
  },
  {
    label: '기준',
    image: 'icon/ui/checkbox.svg',
    value: DETAIL_OPTION.checklist,
  },
  {
    label: '삭제',
    image: 'icon/ui/delete.svg',
    value: DETAIL_OPTION.delete,
  },
];
