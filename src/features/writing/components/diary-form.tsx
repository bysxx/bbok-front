'use client';

import DatePicker from '@components/date-picker';
import TextField from '@components/text-field';
import { IDiaryRequestBody } from '@interfaces/diary';
import moment from 'moment';
import { useController, useFormContext } from 'react-hook-form';

const WritingDiaryForm = () => {
  const today = moment().format('YYYY-MM-DD');
  const { register, control } = useFormContext<IDiaryRequestBody>();
  const { field: dateField } = useController({ name: 'date', control, defaultValue: today });
  const { field: contentField } = useController({ name: 'content', control });

  return (
    <>
      <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">날짜</h2>
      <DatePicker {...register('date')} date={dateField.value} setDate={dateField.onChange} />

      <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">친구 일화</h2>
      <TextField
        {...register('content')}
        input={contentField.value}
        placeholder={`힘들었던 일, 슬펐던 일 그 어떤 얘기도 좋아요. ${'\n'}뽁이 생각 정리를 도와줄게요!`}
        setInput={contentField.onChange}
        maxLength={1000}
      />
    </>
  );
};
export default WritingDiaryForm;
