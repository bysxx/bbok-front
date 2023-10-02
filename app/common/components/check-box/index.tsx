'use client';

import React from 'react';

interface CheckBoxProps {
  selected: boolean;
  onClick: () => void;
}

const CheckBox = ({ selected, onClick }: CheckBoxProps) => {
  return (
    <div className="flex cursor-pointer items-center">
      <div
        className={`flex h-[22px] w-[22px] items-center justify-center rounded-[4px] ${
          selected ? 'bg-orange-1' : 'border-2 border-gray-25 bg-gray-10'
        } `}
        onClick={onClick}
      >
        {selected && (
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 3.76923L4.63636 7L11 1"
              stroke="#FFF9E9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
export default CheckBox;
