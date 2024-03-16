import TagLabel from '@components/tag-label';
import { IDiariesItem } from '@interfaces/diary';
import { getTime } from '@libs/getTime';
import Image from 'next/image';

interface IDiaryItemProps extends IDiariesItem {
  search: string;
}

const DiaryItem = ({ content, date, tags, emojiUrl, search }: IDiaryItemProps) => {
  const [first, second] = content.split(search);

  return (
    <div className="mt-3 bg-gray-10 p-5 rounded-md">
      <h4 className="text-caption-1 text-gray-25">{getTime(date)}</h4>
      {search.length > 0 && content.includes(search) ? (
        <div className="flex mt-[6px]">
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
        <Image width={40} height={40} src={emojiUrl} alt="" />
      </div>
    </div>
  );
};
export default DiaryItem;
