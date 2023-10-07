import RadioButton from '@components/radio-button';
import type { ICharacter } from '@interfaces/friend';
import { useCallback } from 'react';

interface CharacterProps {
  type: ICharacter;
  selected: boolean;
  character: ICharacter;
  setCharacter: (value: ICharacter) => void;
}

const FriendCharacter = ({ type, character, setCharacter, selected }: CharacterProps) => {
  const characters = {
    kaka: {
      selected: '/images/illustration/small-selected-kaka.svg',
      default: '/images/illustration/small-default-kaka.svg',
      title: '카카',
      label: '매일이 짜증나는 카카',
    },
    sisi: {
      selected: '/images/illustration/small-selected-sisi.svg',
      default: '/images/illustration/small-default-sisi.svg',
      title: '시시',
      label: '맑은 눈의 광캐',
    },
  };
  const handleSelectedClick = useCallback(() => {
    setCharacter(character === 'kaka' ? 'sisi' : 'kaka');
  }, [setCharacter, character]);

  return (
    <div
      className={`relative flex h-36 w-36 flex-col rounded-xl ${
        selected ? 'border-2 border-orange-1 bg-[#FFDFCA]' : 'bg-[#E0E0E0]'
      } mr-[10px]`}
    >
      <div className="absolute right-[5px] top-[5px]">
        <RadioButton isChecked={selected} setIsChecked={handleSelectedClick} />
      </div>
      <div className="flex h-full flex-col items-center">
        <img className="mt-3" src={selected ? characters[type].selected : characters[type].default} alt="" />
        <h4 className="mt-[5px] text-sm font-medium text-gray-65">{characters[type].title}</h4>
        <h5 className="text-caption-2 mt-[5px] text-center text-gray-55">{characters[type].label}</h5>
      </div>
    </div>
  );
};
export default FriendCharacter;
