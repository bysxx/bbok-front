import type { TooltipType } from '@components/tooltip/type';

const getTooltipPosition = (placement: TooltipType, offset: number, rect?: DOMRect) => {
  if (!rect) return;

  const placements: { [key in TooltipType]: { top: string; left: string; transform: string } } = {
    'top-center': {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -100%)',
    },
    'top-left': {
      top: `${rect.top - offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, -100%)',
    },
    'top-right': {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, -100%)',
    },
  };

  // eslint-disable-next-line consistent-return
  return placements[placement];
};

export default getTooltipPosition;
