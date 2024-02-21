import { HTMLAttributes } from "react";

export type TBackgroundColor = 'orange1' | 'gray15' | 'alert' | 'orange4' | 'orange6' | 'yellow';

export type TTypography = 'title3' | 'title4' | 'body3';

export type TTextColor = 'white' | 'gray55' | 'orange1';

export type TButtonSize = 'small' | 'medium' | 'large';

export interface IBoxButtonProps extends HTMLAttributes<HTMLButtonElement>{
  text?: string;
  disabled?: boolean;
  border?: boolean;
  onClick?: () => void;
  bg?: TBackgroundColor;
  typo?: TTypography;
  size?: TButtonSize;
  color?: TTextColor;

  isLoading?: boolean;
  children?: React.ReactNode;
}
