import { TCharacter } from '../interfaces/enums';

interface IFriendChracterContent {
  label: string;
  selected: string;
  default: string;
}

export const FRIEND_CHARACTER: { [key in TCharacter]: IFriendChracterContent } = {
  CACTUS: {
    label: '매일이 짜증나는 카카',
    selected: 'illustration/small-selected-kaka.svg',
    default: 'illustration/small-default-kaka.svg',
  },
  HEDGEHOG: {
    label: '맑은 눈의 광캐',
    selected: 'illustration/small-selected-sisi.svg',
    default: 'illustration/small-default-sisi.svg',
  },
};
