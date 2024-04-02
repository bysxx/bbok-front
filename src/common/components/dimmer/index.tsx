import { useClick } from '@hooks/useClick';
import cx from 'classnames';

interface IDimmerProps {
  onClose: () => void;
  isShow: boolean;
  type?: 'tooltip' | 'popup';
}
const Dimmer = ({ onClose, isShow, type = 'tooltip' }: IDimmerProps) => {
  const opacityClassName = type === 'tooltip' ? 'bg-opacity-80' : 'bg-opacity-90';
  const dimmerRef = useClick(onClose);
  return (
    <div
      ref={dimmerRef}
      className={cx(
        'fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#2F2F2F]',
        opacityClassName,
        {
          hidden: !isShow,
          'animate-fade-in-back-drop': isShow,
        },
      )}
    />
  );
};
export default Dimmer;
