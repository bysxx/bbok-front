import { ChangeTopBar } from '@components/top-bar';
import { BAD_CHECK_COUNT } from '@features/checklist/constants/checklist';
import useCustomRouter from '@hooks/useCustomRouter';
import { TypeQuery } from '@interfaces/enums';
import { ICheckItem } from '@interfaces/checklist';
import { CHECK_LIST_TABS_COUNT } from '@features/checklist/constants';

import { ChecklistCount, ChecklistTitle } from '../molecules';
import { ChecklistTabPage } from '../organisms';
interface IChecklistBadProps {
  allBadList: ICheckItem[];
  setAllBadList: (value: ICheckItem[]) => void;
}
const ChecklistBadTemplate = ({ allBadList, setAllBadList }: IChecklistBadProps) => {
  const { push } = useCustomRouter();
  return (
    <>
      <ChangeTopBar
        index={1}
        total={CHECK_LIST_TABS_COUNT}
        onClick={() => {
          push('/login');
        }}
      />

      <div className="ml-8 w-full">
        <ChecklistTitle type={TypeQuery.bad} />
        <ChecklistCount list={allBadList} />
      </div>

      <div className="mb-8 mt-[38px] flex flex-col items-center justify-center">
        <ChecklistTabPage
          type={TypeQuery.bad}
          allList={allBadList}
          setAllList={setAllBadList}
          length={BAD_CHECK_COUNT}
          use="make"
        />
      </div>
    </>
  );
};
export default ChecklistBadTemplate;
