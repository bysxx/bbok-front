import type { TCharacter } from '@interfaces/enums';
import { Character } from '@interfaces/enums';

export const FRIEND_CHARACTER_STYLE: { [key in TCharacter]: { style: string } } = {
  [Character.CACTUS]: {
    style: 'border-orange-4 bg-orange-3 shadow-friend-card-orange',
  },
  [Character.HEDGEHOG]: {
    style: 'border-green-2 bg-green-1 shadow-friend-card-green',
  },
};
