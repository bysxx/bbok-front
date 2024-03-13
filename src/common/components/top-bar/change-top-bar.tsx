interface ChangeTopBarProp {
  type: 'first' | 'second';
  onClick: () => void;
}

const ChangeTopBar = ({ type, onClick }: ChangeTopBarProp) => {
  return (
    <div className="flex h-[52px] w-full items-center justify-between">
      <div className="ml-4" onClick={onClick}>
        <img src="/images/icon/ui/back.svg" alt="" />
      </div>
      <div className="mr-[26px] flex items-center">
        <div className={`size-2 rounded-lg ${type === 'first' ? 'bg-orange-1' : 'bg-gray-15'} `} />
        <div className={`ml-2 size-2 rounded-lg ${type === 'second' ? 'bg-orange-1' : 'bg-gray-15'} `} />
      </div>
    </div>
  );
};
export default ChangeTopBar;
