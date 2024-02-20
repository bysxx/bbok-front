'use client';

import DatePicker from '@components/date-picker';
import DiaryField from '@components/diary-field';
import { ButtonTopBar } from '@components/top-bar';
import { useState } from 'react';

const DiaryDetailModifyPage = () => {
  // const [name, setName] = useState('김도리');
  const [date, setDate] = useState('2023-11-23');
  const [diary, setDiary] = useState('오호호홋');
  // const [tag, setTag] = useState('');
  return (
    <div>
      <ButtonTopBar label={'일화 수정'} onClick={() => {}} name={'완료'} />
      <div className="px-6 pb-4 text-base font-medium text-gray-65">
        <h3 className="mb-3 mt-[15px]">친구</h3>
        {/* <Input disabled={true} inputValue={name} setInputValue={setName} /> */}
        <h5 className="mb-3 mt-8">날짜</h5>
        <DatePicker date={date} setDate={setDate} />
        <h5 className="mb-3 mt-8">친구와의 일화</h5>
        <DiaryField input={diary} setInput={setDiary} />
        <h5 className="mb-3 mt-8">태그</h5>
        {/* <Input type="tag" inputValue={tag} setInputValue={setTag} /> */}
      </div>
    </div>
  );
};
export default DiaryDetailModifyPage;
