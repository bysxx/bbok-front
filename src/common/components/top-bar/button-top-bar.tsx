interface ButtonTopBarProps {
  label: string;
  onClick: () => void;
  name: string;
}
const ButtonTopBar = ({ label, onClick, name }: ButtonTopBarProps) => {
  return (
    <div className="flex w-full items-center justify-between px-5 py-4">
      <h5 className="grow text-center text-[17px] font-medium text-gray-70">{label}</h5>
      <button className="text-sm font-medium text-gray-45" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
export default ButtonTopBar;
