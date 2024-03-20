'use client';

import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

interface TextFieldProps extends Partial<InputHTMLAttributes<HTMLTextAreaElement>> {
  input: string;
  setInput: (value: string) => void;
  maxLength: number;
  placeholder: string;
}

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ input, setInput, maxLength, placeholder, ...props }: TextFieldProps, ref) => {
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
    };

    return (
      <div className="relative h-72 rounded-[10px] bg-gray-10">
        <textarea
          {...props}
          ref={ref}
          id="message"
          className="placeholder:text-body-4 h-64 w-full rounded-[10px] border border-none bg-gray-10 p-[16px] text-gray-70 placeholder:text-gray-30 focus:border-none focus:outline-0"
          placeholder={placeholder}
          value={input}
          onChange={handleTextChange}
        />
        <h5 className="absolute bottom-4 right-4 text-sm font-medium text-gray-20">
          {`${input?.length.toString() ?? props.defaultValue?.toString().length.toString()}/${maxLength.toString()}`}
        </h5>
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
