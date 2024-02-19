'use client';

import { RoundButton } from '@components/buttons';
import BoxButton from '@components/buttons/box-button';
import { DiaryTopBar } from '@components/top-bar';
import { useGetFriend } from '@hooks/queries/friend';
import FriendCard from 'app/(home)/friends/friend-card';
import LockedFriendCard from 'app/(home)/friends/locked-friend-card';

const FriendCardPage = () => {
  const { data } = useGetFriend();

  return (
    <div>
      <DiaryTopBar label={'MY일기장'} settingClick={() => {}} />
      {(() => {
        if (data?.data.friends.length === 0) {
          return (
            <div className="mx-9 mt-9 rounded-3xl bg-white pb-[53px] pt-[51px]">
              <div className="flex flex-col items-center justify-center">
                <img src={'/images/illustration/empty-state-kaka.svg'} alt="" />
                <h1 className="mt-5 text-base font-bold text-gray-65">등록된 친구가 아직 없어요!</h1>
                <h5 className="text-caption-1 mt-3 flex items-center justify-center text-gray-40">
                  친구를 등록하고 일화를 작성하여
                </h5>
                <h5 className="text-caption-1 mb-[17px] text-gray-40">생각을 정리해 보세요</h5>

                <RoundButton type="secondary" onClick={() => {}} label="친구 생성" />
              </div>
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
