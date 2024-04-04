'use client';

import TextField from '@components/text-field';
import type { IDiaryRequestBody } from '@interfaces/diary';
import { useController, useFormContext } from 'react-hook-form';

interface IWritingTextFormProp {
  defaultValue?: string;
}

const WritingTextForm = ({ defaultValue }: IWritingTextFormProp) => {
  const { register, control } = useFormContext<IDiaryRequestBody>();
  const { field } = useController({ name: 'content', control, defaultValue: defaultValue || '' });
  return (
    <>
      <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">친구 일화</h2>
      <TextField
        {...register('content', {
          required: '일화 내용을 입력해주세요',
          maxLength: { value: 1000, message: '최대 1000자까지 입력이 가능해요' },
        })}
        input={field.value}
        placeholder={`힘들었던 일, 슬펐던 일 그 어떤 얘기도 좋아요. ${'\n'}뽁이 생각 정리를 도와줄게요!`}
        setInput={field.onChange}
        maxLength={1000}
      />
    </>
  );
};
export default WritingTextForm;
