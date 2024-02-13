import type { TButtonSize } from './types';

export const sizeStyle: { [key in TButtonSize]: string } = {
  small: 'h-[47px]',
  large: 'h-[57px]',
  medium: 'h-[52px]',
};

export const commonButtonStyle =
  'w-full rounded-xl hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:bg-gray-20 disabled:opacity-50 disabled:shadow-none';
