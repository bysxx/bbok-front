import { bgColor, textColor, typography } from '@styles/theme';
import cx from 'classnames';
import { BeatLoader } from 'react-spinners';

import { commonButtonStyle, sizeStyle } from './constants';
import type { IBoxButtonProps } from './types';

const BoxButton = ({
  text,
  disabled = false,
  border = false,
  onClick,
  bg = 'orange1',
  typo = 'title3',
  color = 'white',
  size = 'medium',
  isLoading = false,
  children,
  className,
}: IBoxButtonProps) => {
  return (
    <div className={border ? `flex w-full items-center justify-center bg-white px-6 py-4 pb-6 shadow-button` : ''}>
      <button
        type="button"
        className={cx(className, commonButtonStyle, sizeStyle[size], bgColor[bg], {
          'hover:bg-orange-hover': bg === 'orange1',
          'hover:bg-alerthover': bg === 'alert',
        })}
        disabled={disabled || isLoading}
        onClick={onClick}
      >
        {isLoading && <BeatLoader color="white" size={8} />}
        {text && !isLoading && (
          <h5 className={cx(typography[typo], { 'text-gray-35': disabled, [textColor[color]]: !disabled })}>{text}</h5>
        )}

        {children}
      </button>
    </div>
  );
};
export default BoxButton;
