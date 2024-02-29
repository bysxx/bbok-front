import cx from 'classnames';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface IDefaultLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const DefaultLayout = ({ children, className }: IDefaultLayoutProps) => {
  return <div className={cx('flex-1 px-6', className)}>{children}</div>;
};
export default DefaultLayout;
