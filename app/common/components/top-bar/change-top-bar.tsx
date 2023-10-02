interface ChangeTopBarProp {
  type: 'first' | 'second';
  setType: (value: 'first' | 'second') => void;
}

const ChangeTopBar = ({ type, setType }: ChangeTopBarProp) => {
  return (
    <div className="flex h-[52px] w-full items-center justify-between">
      <div className="ml-4" onClick={() => setType('first')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.625 5.25L8.25 11.625L14.625 18"
            stroke="#485151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="mr-[26px] flex items-center">
        <div className={`h-2 w-2 rounded-lg ${type === 'first' ? 'bg-orange-1' : 'bg-gray-15'} `} />
        <div className={`ml-2 h-2 w-2 rounded-lg ${type === 'second' ? 'bg-orange-1' : 'bg-gray-15'} `} />
      </div>
    </div>
  );
};
export default ChangeTopBar;
