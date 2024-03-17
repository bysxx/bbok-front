import ImageLoader from '@components/imageLoader';
import Image from 'next/image';

const DistanceBookmark = () => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl bg-brownModal px-12 pb-5 pt-[34px]">
      <div className="absolute right-[10px] top-[10px] cursor-pointer">
        <Image loader={ImageLoader} src={'icon/ui/bookmark.svg'} width={24} height={24} alt="" />
      </div>
      <p className="text-center text-sm font-medium text-gray-5">
        궁극적으로 결혼이든 우정이든 관계에서 유대감을 형성하는 것은 대화다.
      </p>
      <p className="mt-[23px] text-xs font-medium text-gray-5">아일랜드 작가, 오스카 와일드</p>
    </div>
  );
};
export default DistanceBookmark;
