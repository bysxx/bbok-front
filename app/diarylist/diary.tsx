import TagLabel from '@components/tag-label';
import { getTime } from '@libs/getTime';

interface DiaryProp {
  data: any;
}
const Diary = ({ data }: DiaryProp) => {
  const diaryDate = getTime(data.date);
  return (
    <div className="mt-3 bg-gray-10 p-5">
      <h4 className="text-caption-1 text-gray-25">{diaryDate}</h4>
      <h3 className="text-body-4 mr-11 mt-[6px] text-gray-65">{data.content}</h3>
      <div className="flex items-end justify-between">
        <div className="flex flex-wrap items-center">
          {data.tags.map((tag: string) => (
            <div className="mr-[6px] mt-[1px]" key={tag}>
              <TagLabel label={tag} />
            </div>
          ))}
        </div>
        <img src="images/emoji/emoji1-small.svg" alt="" />
      </div>
    </div>
  );
};
export default Diary;
