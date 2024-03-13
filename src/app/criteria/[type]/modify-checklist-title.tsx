import CheckListCount from '@features/checklist/components/checklist-count';
import type { ICheckItem } from '@interfaces/checklist';

interface CheckListTitleProps {
  type: 'bad' | 'good';
  list: ICheckItem[];
}

const ModifyCheckListTitle = ({ type, list }: CheckListTitleProps) => {
  return (
    <div className="mt-7 flex items-center justify-between px-8">
      <h2 className="text-[17px] font-medium text-gray-70">{`내 기준에 ${
        type === 'bad' ? '벗어난' : '적합한'
      } 친구`}</h2>
      <CheckListCount list={list} />
    </div>
  );
};
export default ModifyCheckListTitle;
