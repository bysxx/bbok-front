import CheckBox from '@components/check-box';
import cx from 'classnames';
import React from 'react';

interface CheckListProps {
  label?: string;
  selected: boolean;
  onClick: () => void;
  side?: 'left' | 'right';
}

const commonStyle = 'flex h-[52px] w-full items-center rounded-lg px-4 py-[15px] border';

const CheckList = ({ label, selected, onClick, side = 'left' }: CheckListProps) => {
  return (
    <>
      {(() => {
        if (side === 'left') {
          return (
            <div className={cx(commonStyle, `${selected ? 'border-orange-2 bg-[#FFF9E9]' : 'border-gray-15'}`)}>
              <CheckBox selected={selected} onClick={onClick} />
              <div className="ml-[10px]">
                <h5 className={`text-body-2 ${selected ? 'text-orange-1' : 'text-gray-45'}`}>{label}</h5>
              </div>
            </div>
          );
        }
        return (
          <div className={cx(commonStyle, `justify-between`)}>
            <h5 className="text-body-2 text-gray-45">{label}</h5>
            <CheckBox selected={selected} onClick={onClick} />
          </div>
        );
      })()}
    </>
  );
};
export default CheckList;
