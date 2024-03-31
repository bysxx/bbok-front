import { PortalConsumer } from '@components/global-portal';
import getTooltipPosition from '@libs/getTooltipPosition';
import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';

import TooltipContent from './tooltip-content';
import TooltipDurationContent from './tooltip-duration-content';
import type { TooltipType } from './type';

interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
  position: TooltipType;
  label: string;
  gab?: number;
  /**
   * 툴팁 안 close icon 유무
   */
  icon?: boolean;

  duration?: number;
  delay?: number;

  alwaysShow?: boolean;
}

const Tooltip = ({
  position,
  label,
  children,
  gab,
  icon = false,
  duration = 12,
  delay = 7,
  alwaysShow = true,
  ...props
}: ITooltipProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const [childrenRect, setChildrenRect] = useState<DOMRect>();
  const [tooltipPlacement, setTooltipPlacement] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const childrenElement = childrenRef.current;
      if (!childrenElement) return;
      setChildrenRect(childrenElement.getBoundingClientRect());
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [childrenRef]);

  useEffect(() => {
    if (childrenRect) {
      setTooltipPlacement(getTooltipPosition(position, gab ?? 0, childrenRect)!);
    }
  }, [position, gab, childrenRect]);

  return (
    <div {...props}>
      <div ref={childrenRef}>{children}</div>

      <PortalConsumer>
        {tooltipPlacement && alwaysShow && (
          <TooltipContent type={position} label={label} style={tooltipPlacement} icon={icon} />
        )}
        {tooltipPlacement && !alwaysShow && (
          <TooltipDurationContent
            type={position}
            label={label}
            style={tooltipPlacement}
            duration={duration}
            delay={delay}
          />
        )}
      </PortalConsumer>
    </div>
  );
};

export default Tooltip;
