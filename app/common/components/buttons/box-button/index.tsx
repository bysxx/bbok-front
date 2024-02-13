import Text from '@components/text';
import { bgColor } from '@styles/theme';
import cx from 'classnames';

import { commonButtonStyle, sizeStyle } from './constants';
import type { IBoxButtonProps } from './types';

const BoxButton = ({
  text,
  disabled = false,
  border = false,
  onClick,
  bg = 'orange1',
  typo = 'title3',
  textColor = 'white',
  size = 'medium',
}: IBoxButtonProps) => {
  return (
    <div className={border ? `flex w-full items-center justify-center bg-white px-6 py-4 pb-6 shadow-button` : ''}>
      <button
        type="button"
        className={cx(commonButtonStyle, sizeStyle[size], bgColor[bg], {
          'hover:bg-orange-hover': bg === 'orange1',
          'hover:bg-alerthover': bg === 'alert',
        })}
        disabled={disabled}
        onClick={onClick}
      >
        <Text typo={typo} color={disabled ? 'gray35' : textColor}>
          {text}
        </Text>
      </button>
    </div>
  );
};
export default BoxButton;
