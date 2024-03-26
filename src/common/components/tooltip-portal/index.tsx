import { Tooltip } from '@chakra-ui/react';
import Dimmer from '@components/dimmer';
import { PortalConsumer } from '@components/global-portal';
import type { PropsWithChildren } from 'react';

interface ITooltipPortalProps extends PropsWithChildren {
  isShow: boolean;
  onClose: () => void;
  label: string;
}
const TooltipPortal = ({ isShow, onClose, children, label }: ITooltipPortalProps) => {
  return (
    <>
      <PortalConsumer>
        <Dimmer isShow={isShow} onClose={onClose} />
      </PortalConsumer>
      <Tooltip
        hasArrow
        label={label}
        bg="#FF802D"
        color="white"
        isOpen={isShow}
        placement="top"
        paddingY={3}
        paddingX={6}
        borderRadius={8}
      >
        <div className={`${isShow ? 'z-[200]' : ''} flex justify-center`}>{children}</div>
      </Tooltip>
    </>
  );
};
export default TooltipPortal;
