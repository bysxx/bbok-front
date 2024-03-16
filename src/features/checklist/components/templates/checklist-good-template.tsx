import { ChangeTopBar } from '@components/top-bar';
import { GOOD_CHECK_COUNT } from '@features/checklist/constants/checklist';
import { TypeQuery } from '@interfaces/enums';
import { ICheckItem } from '@interfaces/checklist';
import { CHECK_LIST_TABS_COUNT } from '@features/checklist/constants';

import { ChecklistCount, ChecklistTitle } from '../molecules';
import { ChecklistTabPage } from '../organisms';

interface IChecklistGoodProps {
  allGoodList: ICheckItem[];
  setAllGoodList: (value: ICheckItem[]) => void;
  changeItem: (value: number) => void;
}
const ChecklistGoodTemplate = ({ changeItem, allGoodList, setAllGoodList }: IChecklistGoodProps) => {
  return (
    <>
      <ChangeTopBar
        index={2}
        total={CHECK_LIST_TABS_COUNT}
        onClick={() => {
          changeItem(0);
        }}
      />

      <div className="ml-8 w-full">
        <ChecklistTitle type={TypeQuery.good} />
        <ChecklistCount list={allGoodList} />
      </div>

      <div className="mb-8 mt-[38px] flex flex-col items-center justify-center">
        <ChecklistTabPage
          type={TypeQuery.good}
          allList={allGoodList}
          setAllList={setAllGoodList}
          length={GOOD_CHECK_COUNT}
          use="make"
        />
      </div>
    </>
  );
};
export default ChecklistGoodTemplate;
