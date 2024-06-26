import ImageLoader from '@components/imageLoader';
import { useBookmarkMutation } from '@hooks/queries/bookmark';
import { useBackgroundFadeIn } from '@hooks/useBackgroundFadeIn';
import { useSayingStore } from '@stores/useSayingStore';
import Image from 'next/image';

const DistanceBookmark = () => {
  const { ref } = useBackgroundFadeIn(3);
  const { saying, setSaying } = useSayingStore();
  const { postBookmark, deleteBookmark } = useBookmarkMutation();

  const handleStoreSaying = () => {
    setSaying({
      friendPercentage: saying.friendPercentage,
      saying: {
        ...saying.saying,
        isMarked: !saying.saying.isMarked,
      },
    });
  };

  const handleClickBookmark = () => {
    if (saying.saying.isMarked) {
      deleteBookmark.mutate(saying.saying.id);
    } else {
      postBookmark.mutate(saying.saying.id);
    }
    handleStoreSaying();
  };

  return (
    <div
      ref={ref}
      className="relative flex w-full translate-y-0 animate-[bottom-sheet-up_700ms_ease-in-out] flex-col items-center justify-center rounded-xl bg-brownModal px-12 pb-5 pt-[34px] opacity-10 transition-transform duration-500"
    >
      <div className="absolute right-[10px] top-[10px] cursor-pointer">
        {saying.saying.isMarked ? (
          <Image
            className="cursor-pointer"
            onClick={handleClickBookmark}
            loader={ImageLoader}
            src={'icon/ui/selected-bookmark.svg'}
            width={24}
            height={24}
            alt=""
          />
        ) : (
          <Image
            className="cursor-pointer"
            onClick={handleClickBookmark}
            loader={ImageLoader}
            src={'icon/ui/bookmark.svg'}
            width={24}
            height={24}
            alt=""
          />
        )}
      </div>

      <p className="text-center text-sm font-medium text-gray-5">{saying.saying.contents}</p>
      <p className="mt-[23px] text-xs font-medium text-gray-5">{saying.saying.reference}</p>
    </div>
  );
};
export default DistanceBookmark;
