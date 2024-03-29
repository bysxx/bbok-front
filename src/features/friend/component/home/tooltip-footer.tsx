'use client';

import { Tooltip } from '@chakra-ui/react';
import Dimmer from '@components/dimmer';
import { PortalConsumer } from '@components/global-portal';
import FooterSection from '@components/ui/footer/section';
import { BOTTOM_TAP_ARRAY } from '@constants/tab';
import type { TBottomTab } from '@interfaces/enums';
import { useCheckVisitedStore } from '@stores/useCheckVisitedStore';

const TooltipFooter = ({ focusTab }: { focusTab: TBottomTab }) => {
  const { isCheckDiary, setIsCheckDiary } = useCheckVisitedStore();
  return (
    <PortalConsumer>
      <Dimmer isShow={!isCheckDiary} onClose={() => setIsCheckDiary(true)} />
      <section className="flex justify-center">
        <footer className="absolute bottom-0 grid w-full max-w-md grid-cols-3 border-t border-t-gray-15 bg-[#fbfbfb] text-center text-gray-20">
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
              <FooterSection key={item} item={item} focus={item === focusTab} type="tooltip" onClick={() => {}} />
            </Tooltip>
          ))}
        </footer>
      </section>
    </PortalConsumer>
  );
};
export default TooltipFooter;
