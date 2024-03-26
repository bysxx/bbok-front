'use client';

import BoxButton from '@components/buttons/box-button';
import { DiaryTopBar } from '@components/top-bar';
import useHandleFriendCard from '@features/friend/hooks/useHandleFriendCard';
import { useGetFriend } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import { showErrorToast } from '@libs/showToast';
import { useFriendStore } from '@stores/useFriendStore';
import { useEffect } from 'react';

import { EmptyFriendCard, FriendCard, KeyFriendCard } from './cards';

const FriendCardPage = () => {
  const { data, isSuccess } = useGetFriend();
  const { push } = useCustomRouter();
  const { setFriend } = useFriendStore();

  const { handleFriendType, friendList } = useHandleFriendCard(data?.data.friends || []);
  const type = handleFriendType();

  useEffect(() => {
    if (isSuccess) {
      const [result] = data.data.friends.filter((value) => value.active);
      if (result) {
        setFriend({
          id: result.id,
          name: result.name,
        });
      }
    }
  }, [isSuccess, data]);

  return (
    <div>
      <DiaryTopBar
        label={'MY일기장'}
        settingClick={() => {
          if (type === 'BothActiveFriend' || type === 'OneFriend') {
            push('/friend/modify');
          } else {
            showErrorToast('친구를 먼저 생성해주세요');
            push('/friend/create');
          }
        }}
      />
      {/* 친구가 아예 없는 경우 */}
      {type === 'NoFriend' && (
        <div className="mx-9 mt-9">
          <EmptyFriendCard />
        </div>
      )}
      {/* 활성화 친구 오직 한명인 경우 */}
      {type === 'OneFriend' && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          {friendList.map((friend) => (
            <>
              <FriendCard key={friend?.id} {...friend} />
              <KeyFriendCard name={friend?.name || ''} lock={true} />
            </>
          ))}
        </div>
      )}

      {/* 활성화 친구 와 비활성화 친구가 있는 경우 */}
      {type === 'BothActiveFriend' && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          {friendList.map((friend) => (
            <FriendCard key={friend?.id} {...friend} />
          ))}
        </div>
      )}

      {/* 비활성화 친구만 있는 경우 */}
      {type === 'NoActiveFriend' && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          <KeyFriendCard name={''} lock={false} />
          {friendList.map((friend) => (
            <FriendCard key={friend.id} {...friend} />
          ))}
        </div>
      )}

      <div className="mx-6 mb-[46px] mt-[53px]">
        <BoxButton
          text="나의 친구 기준 보기"
          size="small"
          onClick={() => {
            push('/checklist/detail');
          }}
          bg="orange6"
          color="orange1"
        />
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, a){
              w.__beusablerumclient__ = {
                  load : function(src){
                      var b = d.createElement("script");
                      b.src = src; b.async=true; b.type = "text/javascript";
                      d.getElementsByTagName("head")[0].appendChild(b);
                  }
              };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
            })(window, document, "//rum.beusable.net/load/b240315e124843u497");
				`,
        }}
      />
    </div>
  );
};
export default FriendCardPage;
