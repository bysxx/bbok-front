interface NavTopBarInterface {
  label: string;
  onClick: () => void;
}

const NavTopBar = ({ label, onClick }: NavTopBarInterface) => {
  return (
    <div className="flex w-full items-center p-4">
      <img src={'/images/icon/ui/back.svg'} alt="" className="cursor-pointer" onClick={onClick} />
      <h5 className="mr-5 grow text-center text-lg font-medium text-gray-70">{label}</h5>
    </div>
  );
};
export default NavTopBar;
