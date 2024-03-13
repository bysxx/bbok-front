'use client';

import React from 'react';

interface TextFieldProps {
  input: string;
  setInput: (value: string) => void;
  maxLength: number;
}
const TextField = ({ input, setInput, maxLength }: TextFieldProps) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="relative h-72 rounded-[10px] bg-gray-10">
      <textarea
        id="message"
        className="placeholder:text-body-4 h-64 w-full rounded-[10px] border border-none bg-gray-10 p-[16px] text-gray-70 placeholder:text-gray-30 focus:border-none focus:outline-0"
        placeholder={`힘들었던 일, 슬펐던 일 그 어떤 얘기도 좋아요. ${'\n'}뽁이 생각 정리를 도와줄게요!`}
        value={input}
        onChange={handleTextChange}
      />
      <h5 className="absolute bottom-4 right-4 text-sm font-medium text-gray-20">{`${input.length.toString()}/${maxLength.toString()}`}</h5>
    </div>
  );
};
export default TextField;