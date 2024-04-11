export const CHARACTER = {
  CACTUS: 'CACTUS',
  HEDGEHOG: 'HEDGEHOG',
};
export type TCharacter = keyof typeof CHARACTER;
export type TValueOfCharacter = (typeof CHARACTER)[TCharacter];

interface IFriendChracterContent {
  label: string;
  selected: string;
  default: string;
}

export const FRIEND_CHARACTER: { [key in TValueOfCharacter]: IFriendChracterContent } = {
  [CHARACTER.CACTUS]: {
    label: '매일이 짜증나는 카카',
    selected: 'illustration/small-selected-kaka.svg',
    default: 'illustration/small-default-kaka.svg',
  },
  [CHARACTER.HEDGEHOG]: {
    label: '맑은 눈의 광캐',
    selected: 'illustration/small-selected-sisi.svg',
    default: 'illustration/small-default-sisi.svg',
  },
};
