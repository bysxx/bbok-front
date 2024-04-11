import type { TValueOfCharacter } from '@constants/character';
import { CHARACTER } from '@constants/character';

export const FRIEND_CHARACTER_STYLE: { [key in TValueOfCharacter]: { style: string } } = {
  [CHARACTER.CACTUS]: {
    style: 'border-orange-4 bg-orange-3 shadow-friend-card-orange',
  },
  [CHARACTER.HEDGEHOG]: {
    style: 'border-green-2 bg-green-1 shadow-friend-card-green',
  },
};
