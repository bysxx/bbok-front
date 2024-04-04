import DatePicker from '@components/date-picker';
import type { IDiaryContextBody } from '@features/diary/contexts/type';
import moment from 'moment';
import { useController, useFormContext } from 'react-hook-form';

interface IWritingDateFormProp {
  defaultValue?: string;
}
const WritingDateForm = ({ defaultValue }: IWritingDateFormProp) => {
  const today = moment().format('YYYY-MM-DD');
  const { register, control } = useFormContext<IDiaryContextBody>();
  const { field } = useController({ name: 'date', control, defaultValue: defaultValue || today });

  return (
    <>
      <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">날짜</h2>
      <DatePicker {...register('date')} date={field.value} setDate={field.onChange} />
    </>
  );
};
export default WritingDateForm;
