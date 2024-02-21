import { HTMLAttributes } from "react";
import cx from 'classnames';

const Divider = ({className} : HTMLAttributes<HTMLDivElement>) => {
  return <section className={cx("h-[7px] w-full bg-gray-10", className)} />;
};
export default Divider;
