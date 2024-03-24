import ImageLoader from '@components/imageLoader';
import TagLabel from '@components/tag-label';
import { DIARY_EMOJI } from '@constants/emoji';
import type { IDiariesItem } from '@interfaces/diary';
import { getTime } from '@libs/getTime';
import Image from 'next/image';

interface IDiaryItemProps extends IDiariesItem {
  search: string;
}

const DiaryItem = ({ content, date, tags, emoji, search }: IDiaryItemProps) => {
  const [first, second] = content.split(search);
  return (
    <div className="mt-3 rounded-md bg-gray-10 p-5">
      <h4 className="text-caption-1 text-gray-25">{getTime(date)}</h4>
      {search.length > 0 && content.includes(search) ? (
        <div className="mt-[6px] flex">
          <h3 className="text-body-4 text-gray-65">{first}</h3>
          <h3 className="text-body-4 text-orange-1">{search}</h3>
          <h3 className="text-body-4 text-gray-65">{second}</h3>
        </div>
      ) : (
        <h3 className="text-body-4 mr-11 mt-[6px] text-gray-65">{content}</h3>
      )}

      <div className="flex items-end justify-between">
        <div className="flex flex-wrap items-center">
          {tags.map((tag: string) => (
            <div className="mr-[6px] mt-[1px]" key={tag}>
              <TagLabel label={tag} />
            </div>
          ))}
        </div>
        {emoji && <Image loader={ImageLoader} width={40} height={40} src={DIARY_EMOJI[emoji].select} alt="" />}
      </div>
    </div>
  );
};
export default DiaryItem;
