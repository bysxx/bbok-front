'use client';

import ImageLoader from '@components/imageLoader';
import { TBottomTab } from '@interfaces/enums';
import { BOTTOM_TAP, BOTTOM_TAP_ARRAY } from '@constants/tab';
import useCustomRouter from '@hooks/useCustomRouter';
import { showErrorToast } from '@libs/showToast';
import { useFriendStore } from '@stores/useFriendStore';
import classNames from 'classnames';
import Image from 'next/image';

function Footer({ setRoute, check = false }: { setRoute?: (value: TBottomTab) => void; check?: boolean }) {
  const { push, pathname } = useCustomRouter();
  const { friend } = useFriendStore();

  const handleBottomRouter = (item: TBottomTab) => {
    if (setRoute) {
      setRoute(item);
    }
    if (item === 'Diary' && friend.id === 0) {
      showErrorToast('친구를 먼저 생성해주세요.');
      push('./');
    } else if (!BOTTOM_TAP[item].check.includes(pathname) && !check) {
      push(BOTTOM_TAP[item].href);
    }
  };

  return (
    <footer className="sticky bottom-0 grid w-full grid-cols-3 border-t border-t-gray-15 bg-[#fbfbfb] text-center text-gray-20">
      {BOTTOM_TAP_ARRAY.map((item) => (
        <button
          className={classNames('flex flex-col p-2 items-center', {
            'text-gray-65': BOTTOM_TAP[item].check.includes(pathname),
          })}
          key={BOTTOM_TAP[item].label}
          onClick={() => handleBottomRouter(item)}
        >
          <Image
            loader={ImageLoader}
            width={36}
            height={36}
            src={BOTTOM_TAP[item].check.includes(pathname) ? BOTTOM_TAP[item].iconOn : BOTTOM_TAP[item].iconOff}
            alt=""
          />
          <span className="text-xs">{BOTTOM_TAP[item].label}</span>
        </button>
      ))}
    </footer>
  );
}

export default Footer;
