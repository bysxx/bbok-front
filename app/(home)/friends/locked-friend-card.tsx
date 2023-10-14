import FriendProgressBar from './progress-bar';

export default function LockedFriendCard() {
  return (
    <div className="min-w-[250px] rounded-3xl  bg-brown px-4 pb-6 pt-[18px] shadow-locked-friend-card">
      <div className="flex flex-col items-center gap-6 text-white">
        <h2 className="text-friend-card-head">잠김</h2>

        <figure className="h-[102px] w-[102px] rounded-full bg-white"></figure>

        <div className="text-friend-card-name rounded-[38px] bg-white px-3.5 py-2 text-gray-65">김도리</div>

        <FriendProgressBar percent={100} />

        <p className="text-friend-card-desc text-center">
          카드를 눌러
          <br /> 일화를 작성하세요
        </p>
      </div>
    </div>
  );
}
