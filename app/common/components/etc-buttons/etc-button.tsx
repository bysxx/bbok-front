interface EtcProps {
  type: 'friend' | 'solve' | 'plus';
  onClick?: () => void;
}

const EtcButton = ({ type, onClick }: EtcProps) => {
  const options = {
    friend: {
      label: '나의 친구 기준 보기',
      backgroundColor: 'bg-orange-5',
      textColor: 'text-orange-1',
      info: '',
    },
    solve: {
      label: '가시를 뽁! 뽑기(관계 정리하기)',
      backgroundColor: 'bg-yellow',
      textColor: 'text-orange-1',
      info: 'flex align-center justify-between',
    },
    plus: {
      label: '+나만의 기준 추가',
      backgroundColor: 'bg-orange-5',
      textColor: 'text-orange-3',
      info: 'flex align-center justify-center',
    },
  };
  const { label, backgroundColor, textColor, info } = options[type];

  return (
    <button
      className={`w-full ${
        type === 'plus' ? 'h-[52px]' : 'h-12'
      } ${backgroundColor} ${textColor} rounded-xl pl-5 pr-3 text-base font-semibold leading-4 hover:shadow-md active:opacity-[0.85]`}
      onClick={onClick}
    >
      <div className={`${info}`}>
        <h5 className="my-auto">{label}</h5>
        {type === 'solve' && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.375 5.25L15.75 11.625L9.375 18"
              stroke="#FF802D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
};
export default EtcButton;
