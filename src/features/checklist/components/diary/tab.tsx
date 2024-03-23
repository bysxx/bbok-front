import CheckInput from '@components/check-input';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { updateChecklist } from '@features/checklist/utils';
import { ICheckItem } from '@interfaces/checklist';
import { TQuery } from '@interfaces/enums';

interface IDiaryChecklistTabProps {
  checklist: ICheckItem[];
  setChecklist: (value: ICheckItem[]) => void;
  type: TQuery;
}

const DiaryChecklistTab = ({ checklist, setChecklist, type }: IDiaryChecklistTabProps) => {
  // 체크리스트 아이템을 클릭했을 때
  const handleCheckItemClick = (item: ICheckItem) => {
    setChecklist(updateChecklist(checklist, item.id));
  };
  return (
    <div className="w-full px-8">
      <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[type].label}</h5>
      {checklist.map((item: ICheckItem, i) => (
        <div key={i} className="mb-[12px]">
          <CheckInput selected={item.isChecked} label={item.criteria} onClick={() => handleCheckItemClick(item)} />
        </div>
      ))}
    </div>
  );
};
export default DiaryChecklistTab;
