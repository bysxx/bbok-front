interface BadgeProps {
  src: string;
  type?: 'delete';
}

const StickerBadge = ({ src, type }: BadgeProps) => {
  return (
    <div className="relative flex h-[60px] w-[60px] items-center justify-center whitespace-nowrap rounded-[20px]">
      <img
        className="h-[60px] w-[60px] rounded-[20px] border border-solid border-gray-15 bg-[#B8B8B8]"
        src={src}
        alt=""
      />
      {type === 'delete' && (
        <img className="absolute right-[-6px] top-[-4px]" src="../images/icon/ui/sticker-close.svg" alt="" />
      )}
    </div>
  );
};
export default StickerBadge;
