interface ITabProps {
  divider: boolean;
  onClick: () => void;
  label: string;
}

const Tab = ({ divider, onClick, label }: ITabProps) => {
  return (
    <section className="cursor-pointer" onClick={onClick}>
      <div className="py-[18px] pl-7">
        <h1 className="text-sm font-medium text-gray-70 hover:text-gray-30">{label}</h1>
      </div>
      {divider && <div className="h-[0.5px] w-full bg-gray-15" />}
    </section>
  );
};
export default Tab;
