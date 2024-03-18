import { Tooltip } from '@chakra-ui/react';
import ImageLoader from '@components/imageLoader';
import useBackgroundFadeIn from '@hooks/useBackgroundFadeIn';
import Image from 'next/image';

const DistanceBookmark = () => {
  const { ref } = useBackgroundFadeIn(3);

  return (
    <div
      ref={ref}
      className="relative flex translate-y-0 animate-[bottom-sheet-up_700ms_ease-in-out] flex-col items-center justify-center rounded-xl bg-brownModal px-12 pb-5 pt-[34px] opacity-10 transition-transform duration-500"
    >
      <div className="absolute right-[10px] top-[10px] cursor-pointer">
        <Tooltip
          hasArrow
          label="마이페이지에서 다시 볼 수 있어요"
          bg="#FF802D"
          isOpen={true}
          color="white"
          placement="top-end"
        >
          <Image loader={ImageLoader} src={'icon/ui/bookmark.svg'} width={24} height={24} alt="" />
        </Tooltip>
      </div>

      <p className="text-center text-sm font-medium text-gray-5">
        궁극적으로 결혼이든 우정이든 관계에서 유대감을 형성하는 것은 대화다.
      </p>
      <p className="mt-[23px] text-xs font-medium text-gray-5">아일랜드 작가, 오스카 와일드</p>
    </div>
  );
};
export default DistanceBookmark;
