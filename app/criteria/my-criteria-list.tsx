'use client';

import { NavTopBar } from '@components/top-bar';
import { useGetMyChecklist } from '@hooks/queries/member';

import FriendCriteria from './friend-criteria';

const MyCriteriaList = () => {
  const { data } = useGetMyChecklist();
  return (
    <>
      <NavTopBar label="나의 친구 기준" href="./" />
      <div className="mb-5 mt-[26px] px-6">
        <FriendCriteria type="bad" list={data?.data.badChecklist!!} />
      </div>
      <div className="px-6">
        <FriendCriteria type="good" list={data?.data.goodChecklist!!} />
      </div>
    </>
  );
};
export default MyCriteriaList;
