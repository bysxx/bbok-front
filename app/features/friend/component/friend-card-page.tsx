'use client';

import BoxButton from '@components/buttons/box-button';
import { DiaryTopBar } from '@components/top-bar';
import { useGetFriend } from '@hooks/queries/friend';
import FriendCard from 'app/(home)/friends/friend-card';
import LockedFriendCard from 'app/(home)/friends/locked-friend-card';

import EmptyFriend from './empty-friend';

const FriendCardPage = () => {
  const { data } = useGetFriend();

  return (
    <div>
      <DiaryTopBar label={'MY일기장'} settingClick={() => {}} />
      {(() => {
        if (data?.data.friends.length === 0) {
          return (
            <div className="mx-9 mt-9">
              <EmptyFriend />
            </div>
          );
        }
        return (
          <div className="flex gap-4 overflow-scroll px-9 py-4">
            <FriendCard />
            <LockedFriendCard />
          </div>
        );
      })()}

      <div className="mx-6 mb-[46px] mt-[53px]">
        <BoxButton text="나의 친구 기준 보기" size="small" onClick={() => {}} bg="orange6" color="orange1" />
      </div>
    </div>
  );
};
export default FriendCardPage;
