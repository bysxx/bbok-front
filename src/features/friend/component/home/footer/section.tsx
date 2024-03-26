import ImageLoader from '@components/imageLoader';
import { BOTTOM_TAP } from '@constants/tab';
import type { TBottomTab } from '@interfaces/enums';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';

interface IFooterSectionProps {
  item: TBottomTab;
  focus: boolean;
}
const FooterSection = forwardRef<HTMLDivElement, IFooterSectionProps>(({ item, focus }: IFooterSectionProps, ref) => {
  return (
    <div ref={ref} className="flex justify-center">
      <button
        className={classNames('flex flex-col p-2 items-center', {
          'text-gray-65 z-[2000] bg-[#fbfbfb] w-[76px]': focus,
        })}
        key={BOTTOM_TAP[item].label}
        onClick={() => {}}
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
    </div>
  );
});

FooterSection.displayName = 'FooterSection';
export default FooterSection;
