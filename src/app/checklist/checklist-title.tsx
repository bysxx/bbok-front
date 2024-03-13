const CheckListTitle = ({ type }: { type: 'first' | 'second' }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h1 className="text-title-1 text-gray-70">내 기준에서</h1>
        &nbsp;
        <h1 className="text-title-1 text-orange-1">{type === 'first' ? '벗어난 친구 유형' : '적합한 친구 유형'}</h1>
      </div>
      <h1 className="text-title-1 text-gray-70">5가지를 선택해주세요</h1>
    </div>
  );
};
export default CheckListTitle;
