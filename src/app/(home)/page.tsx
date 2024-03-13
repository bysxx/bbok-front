import friendServerApi from '@apis/friend/friend.server';
import { PrefetchHydration } from '@components/react-query';
import { FRIEND_KEYS } from '@constants/queryKeys';
import { FriendCardPage } from '@features/friend/pages';

const MainPage = () => {
  return (
    <PrefetchHydration queryKey={FRIEND_KEYS.lists()} queryFn={friendServerApi.get}>
      <FriendCardPage />
    </PrefetchHydration>
  );
};
export default MainPage;
