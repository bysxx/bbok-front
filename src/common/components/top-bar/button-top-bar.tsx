import classNames from 'classnames';

interface ButtonTopBarProps {
  label: string;
  onClick: () => void;
  name: string;
  type?: 'primary' | 'secondary';
}

const TEXT_COLOR: Record<'primary' | 'secondary', { main: string; sub: string }> = {
  primary: {
    main: 'text-gray-70',
    sub: 'text-gray-45',
  },
  secondary: {
    main: 'text-gray-10',
    sub: 'text-gray-20',
  },
};

const ButtonTopBar = ({ label, onClick, name, type = 'primary' }: ButtonTopBarProps) => {
  return (
    <div className="flex w-full items-center justify-between px-5 py-4">
      <h5 className={classNames('grow text-center text-[17px] font-medium', TEXT_COLOR[type].main)}>{label}</h5>
      <button className={classNames('text-sm font-medium', TEXT_COLOR[type].sub)} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
export default ButtonTopBar;
