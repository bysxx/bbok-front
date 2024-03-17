'use client';

import { NavTopBar } from '@components/top-bar';
import { useGetMyChecklist } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import { TypeQuery } from '@interfaces/enums';

import { FriendCriteriaCard } from '../organisms';

const ChecklistCriteriaPage = () => {
  const { data } = useGetMyChecklist();
  const { push } = useCustomRouter();
  return (
    <>
      <NavTopBar label="나의 친구 기준" onClick={() => push('/')} />
      <div className="mt-[26px] flex flex-col gap-5 px-6">
        <FriendCriteriaCard type={TypeQuery.bad} list={data?.data.badChecklist!} />
        <FriendCriteriaCard type={TypeQuery.good} list={data?.data.goodChecklist!} />
      </div>
    </>
  );
};
export default ChecklistCriteriaPage;
