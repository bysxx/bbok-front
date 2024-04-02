import { ButtonTopBar } from '@components/top-bar';
import { useBackgroundFadeIn } from '@hooks/useBackgroundFadeIn';
import useCustomRouter from '@hooks/useCustomRouter';
import { useSayingStore } from '@stores/useSayingStore';

const DistanceIsOverDimmer = () => {
  const { ref } = useBackgroundFadeIn(4);
  const { push } = useCustomRouter();
  const { setIsOver } = useSayingStore();
  return (
    <div className="flex justify-center">
      <div ref={ref} className="absolute top-0 z-[2000] size-full max-w-md bg-gray-70">
        <ButtonTopBar
          label="친구와의 거리"
          onClick={() => {
            push('/');
            setIsOver('after');
          }}
          name="홈"
          type="secondary"
        />
        <div className="flex h-[calc(100%-163px)] flex-col items-center justify-center">
          <p className="text-center text-[13px] font-medium leading-6 text-gray-5">
            친구와의 거리가 많이 멀어지셨네요.
            <br />
            그동안의 친구와의 일기를 보면서
            <br />
            마음의 정리를 해보시는 것이 어떨까요
            <br />
            마지막으로 친구와 대화를 시도해보거나
            <br />
            멀어지거나 그 어떤 것이든 선택은 여러분의 자유입니다.
            <br />
            뽁은 여러분의 선택을 존중하고 응원합니다!
            <br />
            We hope it goes well
          </p>
        </div>
        <div className="mx-6 flex flex-col items-center justify-center rounded-xl bg-orange-1 px-[30px] py-4">
          <p className="text-center text-sm font-medium text-[#FFFFFF]">
            홈화면의 설정창에서 친구와의 관계 정리를 하면
            <br />
            새로운 친구의 일기장을 만들 수 있어요.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DistanceIsOverDimmer;
