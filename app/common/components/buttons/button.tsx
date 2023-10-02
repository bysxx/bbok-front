'use client';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  size: 'large' | 'medium'; // 사이즈 option
  onClick?: () => void;
  border?: boolean; // 테두리 그림자 유무
}

const sizeClasses = {
  large: 'w-full text-xl font-medium leading-5 tracking-tighter',
  medium: 'w-full text-base font-medium leading-4 tracking-tighter',
};

const Button = ({ text, disabled = false, size, onClick, border = false }: ButtonProps) => {
  const sizeClass = sizeClasses[size];
  return (
    <div className={border ? `flex items-center px-6 py-4 pb-6 shadow-button` : ''}>
      <button
        type="button"
        className={`bg-orange-1 text-white hover:bg-orange-hover disabled:bg-gray-20 disabled:text-gray-35 ${sizeClass} h-[52px] rounded-xl hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
