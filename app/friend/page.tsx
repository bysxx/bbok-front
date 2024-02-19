import { PrefetchHydration } from '@components/react-query';
import { FRIEND_KEYS } from '@constants/queryKeys';
import { FriendMakePage } from '@features/friend/component';
import friendServerApi from '@requests/friend/friend.server';

const FriendPage = () => {
  return (
    <PrefetchHydration queryKey={FRIEND_KEYS.details()} queryFn={friendServerApi.character}>
      <FriendMakePage />
    </PrefetchHydration>
  );
};
export default FriendPage;
