import React, { useCallback } from 'react';

interface ToggleButtonProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}
const ToggleButton = ({ isChecked, setIsChecked }: ToggleButtonProps) => {
  const handleRadioChange = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <label className="flex  cursor-pointer select-none items-center">
      <div className="relative">
        <input type="checkbox" checked={isChecked} onChange={handleRadioChange} className="sr-only" />
        <div className={`block w-[43px] rounded-full ${isChecked ? 'bg-orange-3' : 'bg-gray-15'} h-6`}></div>
        <div
          className={`absolute left-1 top-1 flex h-[16.8px] w-[16.8px] items-center justify-center rounded-full bg-white transition ${
            isChecked ? 'translate-x-full' : ''
          }`}
        ></div>
      </div>
    </label>
  );
};
export default ToggleButton;
