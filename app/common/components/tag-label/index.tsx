interface TagLabelProps {
  label: string;
  type?: 'orange' | 'gray';
}

const TagLabel = ({ label, type }: TagLabelProps) => {
  return (
    <div
      className={`text-caption-2 flex items-center justify-center overflow-hidden whitespace-nowrap rounded   ${
        type === 'orange'
          ? 'rounded-md border border-solid border-orange-1 bg-white p-2 text-sm font-medium text-orange-1'
          : 'bg-gray-25 p-[6px] text-white'
      } `}
    >
      <h5 className="m-auto">{label}</h5>
    </div>
  );
};
export default TagLabel;
