import cx from 'classnames';
import { forwardRef, type HTMLAttributes } from 'react';

interface RoundProps extends Partial<HTMLAttributes<HTMLButtonElement>> {
  type: 'primary' | 'secondary';
  onClick?: () => void;
  label: string;
}
const options = {
  primary: {
    backgroundColor: 'bg-red',
    textColor: 'text-gray-55',
    hoverColor: '',
  },
  secondary: {
    backgroundColor: 'bg-orange-1',
    textColor: 'text-gray-5',
    hoverColor: 'hover:bg-orange-hover',
  },
};
const RoundButton = forwardRef<HTMLButtonElement, RoundProps>(
  ({ onClick, type, label, className, ...rest }: RoundProps, ref) => {
    const { backgroundColor, hoverColor, textColor } = options[type];
    return (
      <button
        {...rest}
        ref={ref}
        className={cx(
          className,
          backgroundColor,
          hoverColor,
          textColor,
          'rounded-[39px] px-[13px]  py-2 text-center text-xs font-medium leading-none hover:shadow-sm active:opacity-[0.85]',
        )}
        onClick={onClick}
      >
        {label}
      </button>
    );
  },
);

RoundButton.displayName = 'RoundButton';
export default RoundButton;
