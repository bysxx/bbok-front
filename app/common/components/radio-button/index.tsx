import { useCallback } from 'react';

interface RadioButtonProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}
const RadioButton = ({ isChecked, setIsChecked }: RadioButtonProps) => {
  const handleRadioButtonChange = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <div className="flex cursor-pointer items-center" onClick={handleRadioButtonChange}>
      <div
        className={`h-[18px] w-[18px] rounded-full border-[2px] ${
          isChecked ? 'border-gray-45' : 'border-gray-25'
        } flex items-center justify-center`}
      >
        {isChecked && <div className="h-2 w-2 rounded-full bg-orange-3" />}
      </div>
    </div>
  );
};
export default RadioButton;
