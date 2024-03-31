import ImageLoader from '@components/imageLoader';
import { BOTTOM_TAP } from '@constants/tab';
import type { TBottomTab } from '@interfaces/enums';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';

interface IFooterSectionProps {
  focus: boolean;
  item: TBottomTab;
  onClick: () => void;
  type?: 'default' | 'tooltip';
}

const FooterSection = forwardRef<HTMLButtonElement, IFooterSectionProps>(
  ({ focus, item, onClick, type = 'default' }: IFooterSectionProps, ref) => {
    return (
      <section className="flex justify-center">
        <button
          ref={ref}
          className={classNames('flex flex-col p-2 items-center', {
            'text-gray-65': focus,
            'z-[200] bg-[#fbfbfb] absolute bottom-0 w-[76px]': focus && type === 'tooltip',
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
      </section>
    );
  },
);

FooterSection.displayName = 'FooterSection';
export default FooterSection;
