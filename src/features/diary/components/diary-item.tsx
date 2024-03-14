import TagLabel from '@components/tag-label';
import { IDiariesItem } from '@interfaces/diary';
import { getTime } from '@libs/getTime';
import Image from 'next/image';

interface IDiaryItemProps {
  data: IDiariesItem;
}

const DiaryItem = ({ data }: IDiaryItemProps) => {
  const { content, date, tags, emojiUrl } = data;
  return (
    <div className="mt-3 bg-gray-10 p-5">
      <h4 className="text-caption-1 text-gray-25">{getTime(date)}</h4>
      <h3 className="text-body-4 mr-11 mt-[6px] text-gray-65">{content}</h3>
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
