import type { InputHTMLAttributes } from 'react';
import React from 'react';

interface DatePickerProps extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  date: string;
  setDate: (value: string) => void;
}

const DatePicker = ({ date, setDate, ...props }: DatePickerProps) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="relative">
      <input
        {...props}
        type="date"
        value={date}
        className="block h-[47px] w-full rounded-lg border border-none bg-gray-10 px-[14px] py-[16px] text-gray-35 focus:border-none focus:outline-0"
        placeholder="Select date"
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DatePicker;
