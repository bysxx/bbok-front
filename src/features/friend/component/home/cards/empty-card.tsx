import { RoundButton } from '@components/buttons';
import TooltipPortal from '@components/tooltip-portal';
import useCustomRouter from '@hooks/useCustomRouter';
import { useCheckVisitedStore } from '@stores/useCheckVisitedStore';

const EmptyFriendCard = () => {
  const { push } = useCustomRouter();
  const { isCheckFriend, setIsCheckFriend, setIsCheckDiary } = useCheckVisitedStore();

  const onCloseTooltip = () => {
    setIsCheckFriend(true);
    setIsCheckDiary(false);
  };
  return (
    <div className="rounded-3xl bg-white pb-[53px] pt-[51px]">
      <div className="flex flex-col items-center justify-center">
        <img src={'/images/illustration/empty-state-kaka.svg'} alt="" />
        <h1 className="mt-5 text-base font-bold text-gray-65">등록된 친구가 아직 없어요!</h1>
        <h5 className="text-caption-1 mt-3 flex items-center justify-center text-gray-40">
          친구를 등록하고 일화를 작성하여
        </h5>
        <h5 className="text-caption-1 mb-[17px] text-gray-40">생각을 정리해 보세요</h5>
        <TooltipPortal isShow={!isCheckFriend} onClose={onCloseTooltip} label="먼저 친구를 생성해보세요">
          <RoundButton
            type="secondary"
            onClick={() => {
              if (!isCheckFriend) {
                onCloseTooltip();
                return;
              }
              push('/friend/create');
            }}
            label="친구 생성"
          />
        </TooltipPortal>
      </div>
    </div>
  );
};
export default EmptyFriendCard;
