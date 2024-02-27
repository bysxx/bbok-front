import { TEmoji } from './enums/emoji';

interface IEmoji {
  select: string;
  notSelect: string;
  smallSelect: string;
  smallNotSelect: string;
}
export const DIARY_EMOJI_ARRAY: TEmoji[] = ['HAPPY', 'CALM', 'PANIC', 'DISPLEASED', 'SAD', 'ANGRY'];
export const DIARY_EMOJI: { [key in TEmoji]: IEmoji } = {
  CALM: {
    select: './images/emoji/emoji2.svg',
    notSelect: './images/emoji/emoji2-gray.svg',
    smallSelect: './images/emoji/emoji2-small.svg',
    smallNotSelect: './images/emoji/emoji2-gray-small.svg',
  },
  HAPPY: {
    select: './images/emoji/emoji1.svg',
    notSelect: './images/emoji/emoji1-gray.svg',
    smallSelect: './images/emoji/emoji1-small.svg',
    smallNotSelect: './images/emoji/emoji1-gray-small.svg',
  },
  PANIC: {
    select: './images/emoji/emoji3.svg',
    notSelect: './images/emoji/emoji3-gray.svg',
    smallSelect: './images/emoji/emoji3-small.svg',
    smallNotSelect: './images/emoji/emoji3-gray-small.svg',
  },
  ANGRY: {
    select: './images/emoji/emoji6.svg',
    notSelect: './images/emoji/emoji6-gray.svg',
    smallSelect: './images/emoji/emoji6-small.svg',
    smallNotSelect: './images/emoji/emoji6-gray-small.svg',
  },
  DISPLEASED: {
    select: './images/emoji/emoji4.svg',
    notSelect: './images/emoji/emoji4-gray.svg',
    smallSelect: './images/emoji/emoji4-small.svg',
    smallNotSelect: './images/emoji/emoji4-gray-small.svg',
  },
  SAD: {
    select: './images/emoji/emoji5.svg',
    notSelect: './images/emoji/emoji5-gray.svg',
    smallSelect: './images/emoji/emoji5-small.svg',
    smallNotSelect: './images/emoji/emoji5-gray-small.svg',
  },
};
