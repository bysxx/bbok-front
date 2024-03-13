interface CancelTopBarProps {
  onClick: () => void;
}
const CancelTopBar = ({ onClick }: CancelTopBarProps) => {
  return (
    <div className="flex w-full items-end justify-end px-5 py-4">
      <button className="text-sm font-medium text-gray-45" onClick={onClick}>
        닫기
      </button>
    </div>
  );
};
export default CancelTopBar;
