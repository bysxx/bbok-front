import { TQuery, TypeQuery } from '@interfaces/enums';
import { CheckContent } from '@interfaces/member';
import Link from 'next/link';
import { useMemo } from 'react';

interface CriteriaProps {
  type: TQuery;
  list: CheckContent[];
}

const title: { [key in TQuery]: { image: string; label: string } } = {
  [TypeQuery.bad]: {
    image: '/images/icon/ui/broken-heart.svg',
    label: '기피하는 친구 유형',
  },
  [TypeQuery.good]: {
    image: '/images/icon/ui/heart.svg',
    label: '적합한 친구 유형',
  },
};

const FriendCriteria = ({ type, list }: CriteriaProps) => {
  const target = useMemo(() => list.filter((_, i) => i < 5), [list]);
  return (
    <div className="flex justify-between rounded-xl bg-yellow py-5 pl-5 pr-4">
      <div className="flex flex-col">
        <div className="mb-[18px] mt-1 flex items-center">
          <img src={title[type].image} alt="" />
          <h2 className="ml-1 text-base font-semibold text-orange-1">{title[type].label}</h2>
        </div>

        <ul className="ml-6 list-disc">
          {target.slice(0, 5).map((l) => (
            <li key={l.id} className="text-body-3 mb-[14px] ">
              {l.criteria}
            </li>
          ))}
        </ul>
      </div>

      <Link href={`./criteria/${type}`}>
        <h5 className="text-body-4 text-gray-40">수정</h5>
      </Link>
    </div>
  );
};
export default FriendCriteria;
