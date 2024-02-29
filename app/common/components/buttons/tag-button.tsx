import { Tag, TagLabel } from '@chakra-ui/react';
import ImageLoader from '@components/imageLoader';
import Image from 'next/image';
import { MouseEvent } from 'react';

interface ITagButtonProps {
  label: string;
  onClick?: () => void;
  onClickWithEvent?: (event: MouseEvent) => void;
}
const TagButton = ({ label, onClick, onClickWithEvent }: ITagButtonProps) => {
  return (
    <Tag
      size="large"
      key="large"
      borderRadius="6"
      backgroundColor={'white'}
      className="rounded-md border-2 border-orange-1 py-2"
    >
      <TagLabel className="ml-2 text-[13px] font-medium text-orange-1">{label}</TagLabel>
      <Image
        loader={ImageLoader}
        className="ml-[2px] mr-2 cursor-pointer"
        src={'icon/ui/close-orange.svg'}
        alt=""
        width={14}
        height={14}
        onClick={onClick || onClickWithEvent}
      />
    </Tag>
  );
};
export default TagButton;
