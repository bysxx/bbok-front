'use client';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  size: 'large' | 'medium'; // 사이즈 option
  onClick?: () => void;
  border?: boolean; // 테두리 그림자 유무
}

const sizeClasses = {
  medium: 'w-[276px]',
  large: 'w-[326px]',
};

const Button = ({ text, disabled = false, size, onClick, border = false }: ButtonProps) => {
  const sizeClass = sizeClasses[size];
  return (
    <div className={border ? `shadow-button px-6 py-4 pb-6 flex items-center` : ''}>
      <button
        type="button"
        className={`bg-orange-1 disabled:bg-gray-20 disabled:text-gray-35 text-white hover:bg-orange-hover ${sizeClass} rounded-xl font-semibold text-lg leading-[18px] h-[52px]`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
