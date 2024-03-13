import friendServerApi from '@apis/friend/friend.server';
import { PrefetchHydration } from '@components/react-query';
import { FRIEND_KEYS } from '@constants/queryKeys';
import { FriendMakePage } from '@features/friend/pages';

const FriendPage = () => {
  return (
    <PrefetchHydration queryKey={FRIEND_KEYS.details()} queryFn={friendServerApi.character}>
      <FriendMakePage />
    </PrefetchHydration>
  );
};
export default FriendPage;
