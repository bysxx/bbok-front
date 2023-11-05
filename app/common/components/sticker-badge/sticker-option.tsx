interface StickerOptionProps {
  type: 'add' | 'picture';
  onClick: () => void;
}

const StickerOption = ({ type, onClick }: StickerOptionProps) => {
  const options = {
    add: { src: '/images/icon/ui/add.svg', style: 'bg-gray-30' },
    picture: { src: '/images/icon/ui/picture.svg', style: 'bg-gray-20' },
  };
  return (
    <div
      className={`flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[20px] border hover:shadow-lg active:opacity-[0.85] ${options[type].style}`}
      onClick={onClick}
    >
      <img src={options[type].src} alt="" />
    </div>
  );
};
export default StickerOption;
