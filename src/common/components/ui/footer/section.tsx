import ImageLoader from '@components/imageLoader';
import { BOTTOM_TAP } from '@constants/tab';
import type { TBottomTab } from '@interfaces/enums';
import classNames from 'classnames';
import Image from 'next/image';

interface IFooterSectionProps {
  focus: boolean;
  item: TBottomTab;
  onClick: () => void;
}

const FooterSection = ({ focus, item, onClick }: IFooterSectionProps) => {
  return (
    <button
      className={classNames('flex flex-col p-2 items-center', {
        'text-gray-65': focus,
      })}
      key={BOTTOM_TAP[item].label}
      onClick={onClick}
    >
      <Image
        loader={ImageLoader}
        width={36}
        height={36}
        src={focus ? BOTTOM_TAP[item].iconOn : BOTTOM_TAP[item].iconOff}
        alt=""
      />
      <span className="text-xs">{BOTTOM_TAP[item].label}</span>
    </button>
  );
};
export default FooterSection;
