import React, { useCallback } from 'react';

interface DatePickerProps {
  date: string;
  setDate: (value: string) => void;
}

const DatePicker = ({ date, setDate }: DatePickerProps) => {
  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }, []);

  return (
    <div className="relative">
      <input
        type="date"
        value={date}
        className="block h-[47px] w-full rounded-lg border border-none bg-gray-10 px-[14px] py-[16px] focus:border-none focus:outline-0"
        placeholder="Select date"
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DatePicker;
