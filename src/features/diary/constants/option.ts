import { TDetailOption } from '@interfaces/enums';

export const DETAIL_OPTIONS: { label: string; image: string; value: TDetailOption }[] = [
  {
    label: '스티커',
    image: 'icon/ui/sticker.svg',
    value: 'sticker',
  },
  {
    label: '수정',
    image: 'icon/ui/edit.svg',
    value: 'modify',
  },
  {
    label: '기준',
    image: 'icon/ui/checkbox.svg',
    value: 'criteria',
  },
  {
    label: '삭제',
    image: 'icon/ui/delete.svg',
    value: 'delete',
  },
];
