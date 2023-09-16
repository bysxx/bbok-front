interface RoundProps {
  type: 'red' | 'orange';
  onClick?: () => void;
  label: string;
}

const RoundButton = ({ onClick, type, label }: RoundProps) => {
  const options = {
    red: {
      backgroundColor: 'bg-red',
      textColor: 'text-gray-55',
      hoverColor: '',
    },
    orange: {
      backgroundColor: 'bg-orange-1',
      textColor: 'text-gray-5',
      hoverColor: 'hover:bg-orange-hover',
    },
  };
  const { backgroundColor, hoverColor, textColor } = options[type];
  return (
    <button
      className={`${backgroundColor} ${hoverColor} ${textColor} rounded-[39px] px-[13px] text-xs font-medium py-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default RoundButton;
