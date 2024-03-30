import Dimmer from '@components/dimmer';
import { PortalConsumer } from '@components/global-portal';
import getTooltipPosition from '@libs/getTooltipPosition';
import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';

import TooltipContent from './tooltip-content';
import type { TooltipType } from './type';

interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
  position: TooltipType;
  label: string;
  gab?: number;

  dimmer?: boolean;
  isShow: boolean;
  onClose?: () => void;
}

const Tooltip = ({ position, label, children, gab, isShow, onClose, dimmer = false }: ITooltipProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const [childrenRect, setChildrenRect] = useState<DOMRect>();

  const tooltipPlacement = getTooltipPosition(position, gab ?? 0, childrenRect);

  useEffect(() => {
    const childrenElement = childrenRef.current;
    if (!childrenElement) return;
    setChildrenRect(childrenElement.getBoundingClientRect());
  }, []);
  return (
    <>
      <PortalConsumer>{dimmer && isShow && <Dimmer isShow={isShow} onClose={onClose!} />}</PortalConsumer>
      <div ref={childrenRef}>{children}</div>
      <PortalConsumer>
        {tooltipPlacement && isShow && <TooltipContent type={position} label={label} style={tooltipPlacement} />}
      </PortalConsumer>
    </>
  );
};

export default Tooltip;