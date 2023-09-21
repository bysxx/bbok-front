'use client';

import CheckBox from '@components/check-box';

interface CheckListProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const CheckList = ({ label, selected, onClick }: CheckListProps) => {
  return (
    <div
      className={`flex h-[52px] w-[312px] items-center rounded-lg border ${
        selected ? 'border-orange-2 bg-orange-6' : 'border-gray-15'
      }  px-4 py-[15px]`}
    >
      <CheckBox selected={selected} onClick={onClick} />
      <h5 className={`text-body-2 ml-[10px] ${selected ? 'text-orange-1' : 'text-gray-45'}`}>{label}</h5>
    </div>
  );
};
export default CheckList;
