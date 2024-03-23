import ImageLoader from '@components/imageLoader';
import Image from 'next/image';

const BookmarkCard = () => {
  return (
    <div className="relative flex h-32 flex-col items-center justify-center rounded-xl bg-gray-10 px-12 pb-5 pt-[34px] shadow-bookmark">
      <p className="text-center text-sm font-medium text-gray-65">
        궁극적으로 결혼이든 우정이든 관계에서 유대감을 형성하는 것은 대화다.
      </p>
      <Image
        className="absolute right-[10px] top-[10px]"
        loader={ImageLoader}
        // src={'icon/ui/bookmark.svg'}
        src={'icon/ui/selected-bookmark.svg'}
        width={24}
        height={24}
        alt=""
      />
      <p className="mt-[23px] text-xs font-medium text-gray-30">아일랜드 작가, 오스카 와일드</p>
    </div>
  );
};
export default BookmarkCard;
