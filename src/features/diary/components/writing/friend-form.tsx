import Input from '@components/input';
import { useFriendStore } from '@stores/useFriendStore';

const WritingFriendForm = () => {
  const { friend } = useFriendStore();
  return (
    <>
      <h2 className="mb-3 mt-[15px] text-base font-medium text-gray-65">친구</h2>
      <Input disabled={true} inputValue={friend.name} />
    </>
  );
};
export default WritingFriendForm;
