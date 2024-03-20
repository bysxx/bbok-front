import type { TDetailOption } from '@interfaces/enums';
import { DetailOption } from '@interfaces/enums';

export const DETAIL_OPTIONS: { label: string; image: string; value: TDetailOption }[] = [
  {
    label: '스티커',
    image: 'icon/ui/sticker.svg',
    value: DetailOption.sticker,
  },
  {
    label: '수정',
    image: 'icon/ui/edit.svg',
    value: DetailOption.diary,
  },
  {
    label: '기준',
    image: 'icon/ui/checkbox.svg',
    value: DetailOption.checklist,
  },
  {
    label: '삭제',
    image: 'icon/ui/delete.svg',
    value: DetailOption.delete,
  },
];
