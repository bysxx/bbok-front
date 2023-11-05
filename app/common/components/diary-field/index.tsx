'use client';

import React from 'react';

interface DiaryFieldProps {
  input: string;
  setInput: (value: string) => void;
}
const DiaryField = ({ input, setInput }: DiaryFieldProps) => {
  // const maxLength = 1000;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="">
      <textarea
        id="message"
        className="h-72 w-full rounded-[10px] border border-none bg-gray-10 p-[16px] text-gray-70 focus:border-none focus:outline-0"
        placeholder={`힘들었던 일, 슬펐던 일 그 어떤 얘기도 좋아요. ${'\n'}뽁이 생각 정리를 도와줄게요!`}
        value={input}
        onChange={handleTextChange}
      />
    </div>
  );
};
export default DiaryField;
