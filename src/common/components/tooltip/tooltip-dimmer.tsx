import Dimmer from '@components/dimmer';
import { PortalConsumer } from '@components/global-portal';
import getTooltipPosition from '@libs/getTooltipPosition';
import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';

import TooltipContent from './tooltip-content';
import type { TooltipType } from './type';

interface ITooltipDimmerProps extends HTMLAttributes<HTMLDivElement> {
  position: TooltipType;
  label: string;
  gab?: number;
  /**
   * 툴팁 보이는 상태 값
   */
  isShow: boolean;
  onClose?: () => void;

  /**
   * 툴팁 안 close icon 유무
   */
  icon?: boolean;
}

const TooltipDimmer = ({
  position,
  label,
  children,
  gab,
  isShow,
  onClose,
  icon = false,
  ...props
}: ITooltipDimmerProps) => {
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
  }, []);

  useEffect(() => {
    if (childrenRect) {
      setTooltipPlacement(getTooltipPosition(position, gab ?? 0, childrenRect)!);
    }
  }, [position, gab, childrenRect]);

  return (
    <div {...props}>
      <PortalConsumer>{isShow && <Dimmer isShow={isShow} onClose={onClose!} />}</PortalConsumer>
      <div ref={childrenRef}>{children}</div>
      <PortalConsumer>
        {tooltipPlacement && isShow && (
          <TooltipContent type={position} label={label} style={tooltipPlacement} icon={icon} onClose={onClose!} />
        )}
      </PortalConsumer>
    </div>
  );
};

export default TooltipDimmer;
