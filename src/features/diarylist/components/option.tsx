import { DATE_SELECT } from '@constants/date';
import type { TDate } from '@interfaces/enums';
import { DateOption } from '@interfaces/enums';
import type { ChangeEvent } from 'react';

import { getSearchCount } from '../utils';

interface IDiarylistOptionProps {
  length: number;
  order: TDate;
  setOrder: (value: TDate) => void;
  search: string;
}
const DiarylistOption = ({ length, order, setOrder, search }: IDiarylistOptionProps) => {
  const handleSetTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value as TDate);
  };

  return (
    <div className="flex justify-between pb-[2px] pt-[38px]">
      <h5 className="text-caption-1 text-gray-25">{getSearchCount(length, search)}</h5>
      <select className="text-caption-1 text-gray-30" value={order} onChange={(e) => handleSetTime(e)}>
        <option value={DateOption.desc}>{DATE_SELECT[DateOption.desc]}</option>
        <option value={DateOption.asc}>{DATE_SELECT[DateOption.asc]}</option>
      </select>
    </div>
  );
};
export default DiarylistOption;
