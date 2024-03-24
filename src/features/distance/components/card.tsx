import ImageLoader from '@components/imageLoader';
import { useFriendStore } from '@stores/useFriendStore';
import { useSayingStore } from '@stores/useSayingStore';
import Image from 'next/image';

import { DISTANCE_GAGE } from '../constants';
import DistanceProgressBar from './progress-bar';

const DistanceCard = () => {
  const { friend } = useFriendStore();
  const { saying } = useSayingStore();
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-white px-7 pb-8 pt-1">
      <Image className="mb-[18px]" loader={ImageLoader} src={DISTANCE_GAGE.Four} width={206} height={168} alt="" />
      <DistanceProgressBar percent={saying.friendPercentage} />

      <p className="text-title-3 mt-5 text-gray-65">{`${friend.name}님은 나와`}</p>
      <p className="text-title-2 mt-2 text-orange-1">{`${saying.friendPercentage}m 정도 멀어졌어요`}</p>
    </div>
  );
};
export default DistanceCard;
