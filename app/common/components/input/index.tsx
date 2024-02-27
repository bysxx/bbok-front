import Verifier from '@components/verifier';
import type { HTMLAttributes } from 'react';
import React, { useState } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inputValue: string;
  setInputValue?: (e: React.FormEvent<HTMLInputElement>) => void;
  maxLength?: number;
  content?: string;
  errorMessage?: string;
}

const Input = ({
  error = false,
  disabled = false,
  placeholder,
  inputValue,
  setInputValue,
  maxLength,
  className,
  content,
  errorMessage,
}: InputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <div className="relative h-[47px] w-full">
        <input
          className={`text-body-3 ${className} h-[47px] w-full rounded-xl  bg-gray-10 px-[16px]  ${
            error && focus
              ? 'border-2 border-alert text-alert outline-0  placeholder-shown:border-alert focus:border-2 focus:border-alert focus:outline-0'
              : 'border border-none text-gray-65 outline-0 focus:outline-0'
          } placeholder:text-gray-25 disabled:bg-gray-20 disabled:text-gray-50`}
          placeholder={placeholder}
          type="text"
          disabled={disabled}
          onChange={setInputValue}
          maxLength={maxLength}
          value={maxLength ? inputValue.slice(0, maxLength) : inputValue}
          onFocus={() => {
            setFocus(true);
          }}
        />
      </div>
      {!disabled && (
        <Verifier state={!error} className="mt-3" text={content!} errorMessage={errorMessage} notice={!focus} />
      )}
    </div>
  );
};
export default Input;
