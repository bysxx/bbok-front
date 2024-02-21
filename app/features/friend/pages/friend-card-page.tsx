'use client';

import BoxButton from '@components/buttons/box-button';
import { DiaryTopBar } from '@components/top-bar';
import { useGetFriend } from '@hooks/queries/friend';

import { EmptyFriend, FriendCard, KeyFriendCard } from '../component';

const FriendCardPage = () => {
  const { data } = useGetFriend();
  console.log(data?.data);

  return (
    <div>
      <DiaryTopBar label={'MY일기장'} settingClick={() => {}} />
      {data?.data.friends.length === 0 && (
        <div className="mx-9 mt-9">
          <EmptyFriend />
        </div>
      )}
      {data?.data.friends.length === 1 && (
        <div className="flex gap-4 overflow-scroll px-9 py-4">
          <FriendCard countingDiary={0} startedAt="2024-02-20" name="ㅁㄴㅇㄹ" score={0} url="" />
          <KeyFriendCard name="asdg" lock={false} />
        </div>
      )}

      <div className="mx-6 mb-[46px] mt-[53px]">
        <BoxButton text="나의 친구 기준 보기" size="small" onClick={() => {}} bg="orange6" color="orange1" />
      </div>
    </div>
  );
};
export default FriendCardPage;
