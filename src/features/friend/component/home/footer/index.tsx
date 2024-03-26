'use client';

import { Tooltip } from '@chakra-ui/react';
import Dimmer from '@components/dimmer';
import { BOTTOM_TAP_ARRAY } from '@constants/tab';
import type { TBottomTab } from '@interfaces/enums';
import { useCheckTooltipStore } from '@stores/useCheckTooltipStore';

import FooterSection from './section';

const TooltipFooter = ({ focusTab }: { focusTab: TBottomTab }) => {
  const { isCheckDiary, setIsCheckDiary } = useCheckTooltipStore();
  return (
    <>
      <Dimmer isShow={!isCheckDiary} onClose={() => setIsCheckDiary(true)} />
      <footer className="bottom-0 z-[200] grid w-full grid-cols-3 border-t border-t-gray-15 bg-[#fbfbfb] text-center text-gray-20">
        {BOTTOM_TAP_ARRAY.map((item) => (
          <Tooltip
            key={item}
            hasArrow
            label={'친구와의 일화를 써보세요'}
            bg="#FF802D"
            color="white"
            isOpen={!isCheckDiary && item === 'Diary'}
            placement="top"
            paddingY={3}
            paddingX={6}
            borderRadius={8}
          >
            <FooterSection key={item} item={item} focus={item === focusTab} />
          </Tooltip>
        ))}
      </footer>
    </>
  );
};
export default TooltipFooter;
