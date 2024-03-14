import { DATE_SELECT } from '@constants/date';
import { DateOption, TDate } from '@interfaces/enums';
import { ChangeEvent } from 'react';

interface IDiarylistOptionProps {
  length: number;
  order: TDate;
  setOrder: (value: TDate) => void;
}
const DiarylistOption = ({ length, order, setOrder }: IDiarylistOptionProps) => {
  const handleSetTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value as TDate);
  };
  return (
    <div className="pb-[2px] pt-[38px] flex justify-between">
      <h5 className="text-caption-1 text-gray-25">총 일화 수 {length}</h5>
      <select className="text-caption-1 text-gray-30" value={order} onChange={(e) => handleSetTime(e)}>
        <option value={DateOption.desc}>{DATE_SELECT[DateOption.desc]}</option>
        <option value={DateOption.asc}>{DATE_SELECT[DateOption.asc]}</option>
      </select>
    </div>
  );
};
export default DiarylistOption;
