import { type KeyOfColor, type KeyOfTypography, textColor, typography } from '@styles/theme';
import cx from 'classnames';
import type { HTMLAttributes } from 'react';
import { createElement } from 'react';

import type { TEXT_TAGS } from './constants';

interface ITextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: keyof typeof TEXT_TAGS;
  color?: KeyOfColor;
  typo?: KeyOfTypography;
  children: React.ReactNode;
}

const Text = ({ as = 'span', color = 'white', typo = 'body1', children, className, ...rest }: ITextProps) => {
  return createElement(
    as,
    {
      className: cx(textColor[color], typography[typo], className),
      ...rest,
    },
    [children],
  );
};
export default Text;
