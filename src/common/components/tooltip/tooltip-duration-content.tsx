import ImageLoader from '@components/imageLoader';
import useFadeOut from '@hooks/useFadeOut';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';

import { TooltipContentStyle } from './constants';
import type { TooltipType } from './type';

interface ITooltipContentProps {
  label: string;
  type: TooltipType;
  style: object;
  duration: number;
  delay: number;
}

const TooltipDurationContent = forwardRef<HTMLDivElement, ITooltipContentProps>(
  ({ label, type, style, duration, delay }: ITooltipContentProps, ref) => {
    const { ref: contentRef, style: contentStyle } = useFadeOut(duration, delay);
    const { ref: arrowRef, style: arrowStyle } = useFadeOut(duration, delay);
    return (
      <div
        ref={ref}
        className={classNames('absolute flex flex-col z-[500]', TooltipContentStyle[type].wrapper)}
        style={style}
      >
        <div className="rounded-lg bg-orange-1 px-7 py-[18px]" ref={contentRef} style={contentStyle}>
          <h5 className="whitespace-nowrap text-sm font-medium text-white">{label}</h5>
        </div>
        {/* 툴팁 화살표 아이콘 */}
        <div ref={arrowRef} style={arrowStyle}>
          <Image
            loader={ImageLoader}
            src={'icon/ui/tooltip-arrow.svg'}
            className={classNames(TooltipContentStyle[type].arrow, '-mt-1')}
            width={20}
            height={12}
            alt=""
          />
        </div>
      </div>
    );
  },
);

TooltipDurationContent.displayName = 'TooltipDurationContent';
export default TooltipDurationContent;
