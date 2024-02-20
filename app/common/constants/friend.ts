import { TFriendCharacter } from "@interfaces/friend";

interface IFriendChracterContent {
  label: string;
  selected: string;
  default: string;
}
export const FRIEND_CHARACTER: {[key in TFriendCharacter]: IFriendChracterContent} = {
  CACTUS: {
    label: '매일이 짜증나는 카카', 
    selected: '/images/illustration/small-selected-kaka.svg',
    default: '/images/illustration/small-default-kaka.svg'
  },
  HEDGEHOG: {
    label: '맑은 눈의 광캐', 
    selected: '/images/illustration/small-selected-sisi.svg',
    default: '/images/illustration/small-default-sisi.svg',
  },
};
