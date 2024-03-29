import ImageLoader from '@components/imageLoader';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import useCustomRouter from '@hooks/useCustomRouter';
import type { IUserChecklistItem } from '@interfaces/checklist';
import type { TQuery } from '@interfaces/enums';
import Image from 'next/image';
import { useMemo } from 'react';

interface CriteriaProps {
  type: TQuery;
  list: IUserChecklistItem[];
}

const FriendCriteriaCard = ({ type, list }: CriteriaProps) => {
  const target = useMemo(() => list.filter((item) => item.isUsed), [list]);
  const { push } = useCustomRouter();
  return (
    <section className="flex justify-between rounded-xl bg-yellow py-5 pl-5 pr-4">
      <div className="flex flex-col">
        <div className="mb-[18px] mt-1 flex items-center">
          <Image loader={ImageLoader} src={DIARY_CRITERIA_TEXT[type].img} alt="" width={24} height={24} />
          <h2 className="ml-1 text-base font-semibold text-orange-1">{DIARY_CRITERIA_TEXT[type].subLabel}</h2>
        </div>

        <ul className="ml-6 list-disc">
          {target.map((l, i) => (
            <li key={i} className="text-body-3 mb-[14px] ">
              {l.criteria}
            </li>
          ))}
        </ul>
      </div>

      <span
        className="text-body-4 cursor-pointer text-gray-40"
        onClick={() => {
          push(`./modify/${type}`);
        }}
      >
        수정
      </span>
    </section>
  );
};
export default FriendCriteriaCard;
