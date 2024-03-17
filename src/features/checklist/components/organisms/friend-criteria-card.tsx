import ImageLoader from '@components/imageLoader';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { TQuery } from '@interfaces/enums';
import { CheckContent } from '@interfaces/member';
import Image from 'next/image';
import { useMemo } from 'react';

interface CriteriaProps {
  type: TQuery;
  list: CheckContent[];
}

const FriendCriteriaCard = ({ type, list }: CriteriaProps) => {
  const target = useMemo(() => list.filter((_, i) => i < 5), [list]);
  return (
    <section className="flex justify-between rounded-xl bg-yellow py-5 pl-5 pr-4">
      <div className="flex flex-col">
        <div className="mb-[18px] mt-1 flex items-center">
          <Image loader={ImageLoader} src={DIARY_CRITERIA_TEXT[type].img} alt="" width={24} height={24} />
          <h2 className="ml-1 text-base font-semibold text-orange-1">{DIARY_CRITERIA_TEXT[type].subLabel}</h2>
        </div>

        <ul className="ml-6 list-disc">
          {target.slice(0, 5).map((l) => (
            <li key={l.id} className="text-body-3 mb-[14px] ">
              {l.criteria}
            </li>
          ))}
        </ul>
      </div>

      {/*<Link href={`./checklist/modify/${type}`}>*/}
      <span className="text-body-4 text-gray-40">수정</span>
      {/*</Link>*/}
    </section>
  );
};
export default FriendCriteriaCard;
