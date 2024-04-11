import type { TQuery } from '@constants/query';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';

const ChecklistTitle = ({ type }: { type: TQuery }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h1 className="text-title-1 text-gray-70">내 기준에서</h1>
        &nbsp;
        <h1 className="text-title-1 text-orange-1">{DIARY_CRITERIA_TEXT[type].title}</h1>
      </div>
      <h1 className="text-title-1 text-gray-70">5가지를 선택해주세요</h1>
    </div>
  );
};
export default ChecklistTitle;
