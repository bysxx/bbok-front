'use client';

import { NavTopBar } from '@components/top-bar';
import { DATA } from '@features/checklist/dummy';
import useCustomRouter from '@hooks/useCustomRouter';
import { TypeQuery } from '@interfaces/enums';

import FriendCriteriaCard from './card';

const ChecklistCriteriaPage = () => {
  // const { data } = useGetMyChecklist();
  const { push } = useCustomRouter();
  return (
    <>
      <NavTopBar label="나의 친구 기준" onClick={() => push('/')} />
      <div className="mt-[26px] flex flex-col gap-5 px-6">
        <FriendCriteriaCard type={TypeQuery.bad} list={DATA.badChecklist} />
        <FriendCriteriaCard type={TypeQuery.good} list={DATA.goodChecklist} />
      </div>
    </>
  );
};
export default ChecklistCriteriaPage;
