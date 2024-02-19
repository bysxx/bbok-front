import { PrefetchHydration } from '@components/react-query';
import { FRIEND_KEYS } from '@constants/queryKeys';
import { FriendCardPage } from '@features/friend/component';
import friendServerApi from '@requests/friend/friend.server';

const MainPage = () => {
  return (
    <PrefetchHydration queryKey={FRIEND_KEYS.lists()} queryFn={friendServerApi.get}>
      <FriendCardPage />
    </PrefetchHydration>
  );
};
export default MainPage;
