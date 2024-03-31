import ImageLoader from '@components/imageLoader';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';

import { TooltipContentStyle } from './constants';
import type { TooltipType } from './type';

interface ITooltipContentProps {
  label: string;
  type: TooltipType;
  style: object;
  icon: boolean;
  onClose?: () => void;
}

const TooltipContent = forwardRef<HTMLDivElement, ITooltipContentProps>(
  ({ label, type, style, icon, onClose }: ITooltipContentProps, ref) => {
    return (
      <div
        ref={ref}
        className={classNames('absolute flex flex-col z-[500]', TooltipContentStyle[type].wrapper)}
        style={style}
      >
        <div className="rounded-lg bg-orange-1 px-7 py-[18px]">
          <h5 className="whitespace-nowrap text-sm font-medium text-white">{label}</h5>
          {/* 툴팁 안 취소 아이콘 */}
          {icon && (
            <Image
              className="absolute right-2 top-2 cursor-pointer"
              loader={ImageLoader}
              src={'icon/ui/close.white.svg'}
              width={16}
              height={16}
              onClick={onClose}
              alt=""
            />
          )}
        </div>
        {/* 툴팁 화살표 아이콘 */}
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
