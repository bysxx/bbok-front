import React, { useCallback } from 'react';

interface InputProps {
  error?: boolean;
  disabled?: boolean;
  type?: 'name' | 'tag';
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Input = ({ error = false, disabled = false, type = 'name', inputValue, setInputValue }: InputProps) => {
  const handleInputValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div>
      <div className="relative h-[47px] w-full min-w-[200px]">
        <input
          className={`text-body-3 h-[47px] w-full rounded-xl  bg-gray-10 px-[16px]  ${
            error
              ? 'border-2 border-alert text-alert outline-0  placeholder-shown:border-alert focus:border-2 focus:border-alert focus:outline-0'
              : 'border border-none text-gray-65 outline-0 focus:outline-0'
          } disabled:bg-gray-20 disabled:text-gray-50`}
          placeholder={type === 'name' ? '이름을 입력하세요' : '나만의 태그를 등록해보세요'}
          type="text"
          disabled={disabled}
          onChange={handleInputValueChange}
          value={inputValue}
        />
      </div>
    </div>
  );
};
export default Input;
