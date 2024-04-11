'use client';

import type { TBottomTab } from '@constants/tab';
import { BOTTOM_TAP, BOTTOM_TAP_ARRAY } from '@constants/tab';
import useCustomRouter from '@hooks/useCustomRouter';
import { showErrorToast } from '@libs/showToast';
import { useFriendStore } from '@stores/useFriendStore';

import FooterSection from './section';

interface IFooterProps {
  setRoute?: (value: TBottomTab) => void;
  check?: boolean;
}
const Footer = ({ setRoute, check = false }: IFooterProps) => {
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
        <FooterSection
          key={item}
          onClick={() => handleBottomRouter(item)}
          focus={BOTTOM_TAP[item].check.includes(pathname)}
          item={item}
        />
      ))}
    </footer>
  );
};

export default Footer;
