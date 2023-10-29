const TagLabel = ({ label }: { label: string }) => {
  return (
    <div className="text-caption-2 overflow-hidden whitespace-nowrap rounded bg-gray-25 p-[6px] text-white">
      <h5>{label}</h5>
    </div>
  );
};
export default TagLabel;
