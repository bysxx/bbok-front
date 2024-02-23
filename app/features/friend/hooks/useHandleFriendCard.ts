import { Friend } from "@interfaces/friend";

const useHandleFriendCard = (friends: Friend[]) => {
  const [...activeFriend] = friends.filter(friend => friend.active);
  const [...inactiveFriend] = friends.filter(friend => !friend.active);
  const friendList = activeFriend.concat(inactiveFriend).filter(friend => friend);
  const name = activeFriend[0]?.name;
  const id = activeFriend[0]?.id;

  const handleFriendType = (): "NoFriend" | "BothActiveFriend" | "OneFriend" | "NoActiveFriend"=> {
    if (activeFriend.length > 0 && inactiveFriend.length > 0) return "BothActiveFriend";
    if (activeFriend.length > 0 && inactiveFriend.length === 0) return "OneFriend";
    if (activeFriend.length === 0 && inactiveFriend.length > 0) return "NoActiveFriend";
    return "NoFriend";
  }

  return {
    handleFriendType,
    friendList,
    name,
    id
  }
};
export default useHandleFriendCard;
