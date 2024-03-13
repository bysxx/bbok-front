'use client';

import { useGetMyInfo } from '@hooks/queries/member';

import { Profile } from '../components';

const MyInfoPage = () => {
  const { data } = useGetMyInfo();
  return (
    <>
      <div className="pl-7 pt-4">
        <h1 className="text-title-1 text-gray-70">내정보</h1>
      </div>
      <Profile src={data?.data.profileUrl!!} name={data?.data.memberName!!} />
    </>
  );
};
export default MyInfoPage;
