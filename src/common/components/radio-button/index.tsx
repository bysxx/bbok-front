'use client';

interface RadioButtonProps {
  isChecked: boolean;
  setIsChecked: () => void;
}
const RadioButton = ({ isChecked, setIsChecked }: RadioButtonProps) => {
  return (
    <div className="flex cursor-pointer items-center" onClick={setIsChecked}>
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
