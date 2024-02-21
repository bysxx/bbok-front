'use client';

import BoxButton from '@components/buttons/box-button';
import { DiaryTopBar } from '@components/top-bar';
import { useGetFriend } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';

import { EmptyFriend, FriendCard, KeyFriendCard } from '../component';

const FriendCardPage = () => {
  const { data } = useGetFriend();
  const { push } = useCustomRouter();
  const friends = data?.data ? data.data.friends : [];
  return (
    <div>
      <DiaryTopBar
        label={'MY일기장'}
        settingClick={() => {
          push({ pathname: '/setting', query: { id: friends[0]?.id, name: friends[0]?.name } });
        }}
      />
      {friends.length === 0 && (
        <div className="mx-9 mt-9">
          <EmptyFriend />
        </div>
      )}
      {friends.length === 1 && friends[0]?.active && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          <FriendCard
            countingDiary={friends[0]?.countingDiary}
            startedAt={friends[0].startedAt}
            name={friends[0].name}
            score={friends[0].score}
            url={friends[0].characterUrl}
          />
          <KeyFriendCard name={friends[0].name} lock={true} />
        </div>
      )}

      {friends.length === 1 && !friends[0]?.active && friends[0] && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          <KeyFriendCard name={friends[0].name} lock={true} />
          <FriendCard
            countingDiary={friends[0]?.countingDiary}
            startedAt={friends[0].startedAt}
            name={friends[0].name}
            score={friends[0].score}
            url={friends[0].characterUrl}
            active={false}
          />
        </div>
      )}

      <div className="mx-6 mb-[46px] mt-[53px]">
        <BoxButton
          text="나의 친구 기준 보기"
          size="small"
          onClick={() => {
            push('/criteria');
          }}
          bg="orange6"
          color="orange1"
        />
      </div>
    </div>
  );
};
export default FriendCardPage;
