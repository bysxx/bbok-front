import DatePicker from '@components/date-picker';
import { IDiaryRequestBody } from '@interfaces/diary';
import moment from 'moment';
import { useFormContext, useController } from 'react-hook-form';

const WritingDateForm = () => {
  const today = moment().format('YYYY-MM-DD');
  const { register, control } = useFormContext<IDiaryRequestBody>();
  const { field } = useController({ name: 'date', control, defaultValue: today });

  return (
    <>
      <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">날짜</h2>
      <DatePicker {...register('date')} date={field.value} setDate={field.onChange} />
    </>
  );
};
export default WritingDateForm;
