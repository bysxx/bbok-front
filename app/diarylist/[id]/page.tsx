import TagLabel from '@components/tag-label';
import { NavTopBar } from '@components/top-bar';
import { getTime } from '@libs/getTime';

import { diary } from '../dummy';
import DiaryDetailContent from './diary-detail-content';

const DiaryDetail = () => {
  const diaryDate = getTime(diary.date);
  return (
    <div className="h-full w-full bg-gray-13">
      <NavTopBar href={'./'} label={diaryDate} />
      <div className="mt-4 flex items-center justify-center">
        <img src="../images/emoji/emoji3.svg" alt="" />
      </div>
      <div className="mx-6">
        <DiaryDetailContent content={diary.content} />
        <div className="mt-8">
          <h5 className="text-lg font-semibold">태그</h5>
          <div className="mt-3 flex items-center justify-start">
            {diary.tags.map((tag) => (
              <div className="mr-2" key={tag}>
                <TagLabel label={tag} type="orange" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiaryDetail;
