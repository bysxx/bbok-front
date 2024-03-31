import type { TooltipType } from './type';

export const TooltipContentStyle: Record<TooltipType, { wrapper: string; arrow: string }> = {
  'top-center': {
    wrapper: 'items-center',
    arrow: '',
  },
  'top-left': {
    wrapper: 'items-start',
    arrow: 'ml-3',
  },
  'top-right': {
    wrapper: 'items-end',
    arrow: 'mr-3',
  },
};
