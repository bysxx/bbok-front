import ImageLoader from '@components/imageLoader';
import type { BookmarkContent } from '@interfaces/bookmark';
import Image from 'next/image';

const BookmarkCard = (data: BookmarkContent) => {
  return (
    <div className="relative flex h-32 flex-col items-center justify-center rounded-xl bg-gray-10 px-12 pb-5 pt-[34px] shadow-bookmark">
      <p className="text-center text-sm font-medium text-gray-65">{data.contents}</p>
      <Image
        className="absolute right-[10px] top-[10px]"
        loader={ImageLoader}
        src={'icon/ui/selected-bookmark.svg'}
        width={24}
        height={24}
        alt=""
      />
      <p className="mt-[23px] text-xs font-medium text-gray-30">{data.reference}</p>
    </div>
  );
};
export default BookmarkCard;
