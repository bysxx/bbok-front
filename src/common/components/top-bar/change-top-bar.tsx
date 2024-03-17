interface ChangeTopBarProp {
  index: number;
  total: number;
  onClick: () => void;
}

const ChangeTopBar = ({ index, total, onClick }: ChangeTopBarProp) => {
  const dots = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex h-[52px] w-full items-center justify-between pl-4 pr-[26px]">
      <div className="cursor-pointer" onClick={onClick}>
        <img src="/images/icon/ui/back.svg" alt="" />
      </div>
      <div className="flex items-center gap-2">
        {dots.map((num) => (
          <div key={num} className={`size-2 rounded-lg ${num === index ? 'bg-orange-1' : 'bg-gray-15'}`} />
        ))}
      </div>
    </div>
  );
};
export default ChangeTopBar;
