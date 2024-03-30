import ImageLoader from '@components/imageLoader';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';

import type { TooltipType } from './type';

interface ITooltipContentProps {
  label: string;
  type: TooltipType;
  style: object;
}

const TooltipContentStyle: Record<TooltipType, { wrapper: string; arrow: string }> = {
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
const TooltipContent = forwardRef<HTMLDivElement, ITooltipContentProps>(
  ({ label, type, style }: ITooltipContentProps, ref) => {
    return (
      <div
        ref={ref}
        className={classNames('absolute flex flex-col z-[500]', TooltipContentStyle[type].wrapper)}
        style={style}
      >
        <div className="rounded-lg bg-orange-1 px-7 py-[18px]">
          <h5 className="text-sm font-medium text-white">{label}</h5>
        </div>
        <Image
          loader={ImageLoader}
          src={'icon/ui/tooltip-arrow.svg'}
          className={classNames(TooltipContentStyle[type].arrow, '-mt-1')}
          width={20}
          height={12}
          alt=""
        />
      </div>
    );
  },
);

TooltipContent.displayName = 'TooltipContent';
export default TooltipContent;
