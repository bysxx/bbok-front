'use client';

import { PortalConsumer } from '@components/global-portal';
import Tooltip from '@components/tooltip';
import FooterSection from '@components/ui/footer/section';
import { BOTTOM_TAP_ARRAY } from '@constants/tab';
import type { TBottomTab } from '@interfaces/enums';
import { useCheckVisitedStore } from '@stores/useCheckVisitedStore';
import { Fragment } from 'react';

const TooltipFooter = ({ focusTab }: { focusTab: TBottomTab }) => {
  const { isCheckDiary, setIsCheckDiary } = useCheckVisitedStore();
  return (
    <section className="flex justify-center">
      <footer className="absolute bottom-0 grid w-full max-w-md grid-cols-3 border-t border-t-gray-15 bg-[#fbfbfb] text-center text-gray-20">
        {BOTTOM_TAP_ARRAY.map((item) => (
          <Fragment key={item}>
            {(() => {
              if (!isCheckDiary && item === 'Diary') {
                return (
                  <Tooltip
                    key={item}
                    label="친구와의 일화를 써보세요"
                    position="top-center"
                    gab={10}
                    dimmer={!isCheckDiary && item === 'Diary'}
                    isShow={!isCheckDiary && item === 'Diary'}
                    onClose={() => setIsCheckDiary(true)}
                  >
                    <PortalConsumer>
                      <FooterSection
                        key={item}
                        item={item}
                        focus={item === focusTab}
                        type="tooltip"
                        onClick={() => {}}
                      />
                    </PortalConsumer>
                  </Tooltip>
                );
              }

              return (
                <FooterSection key={item} item={item} focus={item === focusTab} type="tooltip" onClick={() => {}} />
              );
            })()}
          </Fragment>
        ))}
      </footer>
    </section>
  );
};
export default TooltipFooter;
