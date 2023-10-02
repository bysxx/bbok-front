import CheckBox from '@components/check-box';
import React from 'react';

interface CheckListProps {
  label?: string;
  selected: boolean;
  onClick: () => void;
}

const CheckList = ({ label, selected, onClick }: CheckListProps) => {
  return (
    <div
      className={`flex h-[52px] w-full items-center rounded-lg border ${
        selected ? 'border-orange-2 bg-orange-6' : 'border-gray-15'
      }  px-4 py-[15px]`}
    >
      <CheckBox selected={selected} onClick={onClick} />
      <div className="ml-[10px]">
        <h5 className={`text-body-2 ${selected ? 'text-orange-1' : 'text-gray-45'}`}>{label}</h5>
      </div>
    </div>
  );
};
export default CheckList;
