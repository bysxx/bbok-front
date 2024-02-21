import Image from 'next/image';

interface IKeyFriendCardProp {
  name: string;
  lock: boolean;
}
const KeyFriendCard = ({ name, lock }: IKeyFriendCardProp) => {
  return (
    <div className="min-w-[250px] rounded-3xl bg-brown px-4 pb-6 pt-[18px] shadow-locked-friend-card">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-friend-card-head text-white">{lock ? '잠김' : '사용가능'}</h2>
        <Image
          src={lock ? '/images/illustration/lock-key.svg' : '/images/illustration/open-key.svg'}
          alt=""
          width={112}
          height={112}
          className="mt-14"
        />

        {(() => {
          if (lock) {
            return (
              <>
                <p className="text-body-4 mt-8 text-center text-gray-15">
                  {name}와 관계 정리 후
                  <br /> 다른 친구를 만날 수 있어요
                </p>

                <h5 className="text-caption-1 mt-3 text-gray-20">관계정리는 관리 탭에서 확인 가능</h5>
              </>
            );
          }
          return (
            <p className="text-body-4 mt-8 text-center text-gray-15">
              새로운 친구를
              <br /> 생성할 수 있어요
            </p>
          );
        })()}
      </div>
    </div>
  );
};
export default KeyFriendCard;
