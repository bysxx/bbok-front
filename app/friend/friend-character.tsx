import RadioButton from '@components/radio-button';
import { FRIEND_CHARACTER } from '@constants/character';
import type { TCharacter } from '@constants/enums';
import { Character } from '@constants/enums';
import { useCallback } from 'react';

interface CharacterProps {
  type: TCharacter;
  selected: boolean;
  character: TCharacter;
  setCharacter: (value: TCharacter) => void;
  name: string;
}

const FriendCharacter = ({ type, character, setCharacter, selected, name }: CharacterProps) => {
  const handleSelectedClick = useCallback(() => {
    setCharacter(character === Character.CACTUS ? Character.HEDGEHOG : Character.CACTUS);
  }, [setCharacter, character]);

  return (
    <div
      className={`relative flex size-36 flex-col rounded-xl ${
        selected ? 'border-2 border-orange-1 bg-[#FFDFCA]' : 'bg-[#E0E0E0]'
      } mr-[10px]`}
    >
      <div className="absolute right-[5px] top-[5px]">
        <RadioButton isChecked={selected} setIsChecked={handleSelectedClick} />
      </div>
      <div className="flex h-full flex-col items-center">
        <img
          className="mt-3"
          src={selected ? FRIEND_CHARACTER[type].selected : FRIEND_CHARACTER[type].default}
          alt=""
        />
        <h4 className="mt-[5px] text-sm font-medium text-gray-65">{name}</h4>
        <h5 className="text-caption-2 mt-[5px] text-center text-gray-55">{FRIEND_CHARACTER[type].label}</h5>
      </div>
    </div>
  );
};
export default FriendCharacter;
