import ImageLoader from '@components/imageLoader';
import Image from 'next/image';

const EmptyBookmarkCard = () => {
  return (
    <div className="flex h-[calc(100%-120px)] flex-col items-center justify-center">
      <Image loader={ImageLoader} src={'illustration/diary-list.svg'} width={256} height={256} alt="" />
      <h1 className="text-title-1 mt-[10px] text-gray-65">북마크에 등록된 명언이 아직 없어요.</h1>
      <p className="text-body-3 mt-4 text-center text-gray-30">
        다시 보고 싶은 명언이 있다면 <br></br> 북마크를 통해 보관해 보세요.
      </p>
    </div>
  );
};
export default EmptyBookmarkCard;
