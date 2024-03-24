import ImageLoader from '@components/imageLoader';
import Image from 'next/image';

const EmptyDiarylistCard = () => {
  return (
    <div className="flex h-[calc(100%-48px)] flex-col items-center justify-center">
      <Image loader={ImageLoader} src={'illustration/empty-state-kaka.svg'} width={92} height={92} alt="" />
      <h2 className="mt-5 text-base font-bold text-gray-65">검색 결과가 없어요</h2>
      <p className="text-caption-1 mt-3 text-gray-40">다른 키워드로 검색해보세요.</p>
    </div>
  );
};
export default EmptyDiarylistCard;
