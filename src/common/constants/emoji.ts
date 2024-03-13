import { TEmoji } from '../interfaces/enums/emoji';

interface IEmoji {
  select: string;
  notSelect: string;
  smallSelect: any;
  smallNotSelect: any;
}
export const DIARY_EMOJI_ARRAY: TEmoji[] = ['HAPPY', 'CALM', 'PANIC', 'DISPLEASED', 'SAD', 'ANGRY'];
export const DIARY_EMOJI: { [key in TEmoji]: IEmoji } = {
  CALM: {
    select: 'emoji/emoji2.svg',
    notSelect: 'emoji/emoji2-gray.svg',
    smallSelect: 'emoji/emoji2-small.svg',
    smallNotSelect: 'emoji/emoji2-gray-small.svg',
  },
  HAPPY: {
    select: 'emoji/emoji1.svg',
    notSelect: 'emoji/emoji1-gray.svg',
    smallSelect: 'emoji/emoji1-small.svg',
    smallNotSelect: 'emoji/emoji1-gray-small.svg',
  },
  PANIC: {
    select: 'emoji/emoji3.svg',
    notSelect: 'emoji/emoji3-gray.svg',
    smallSelect: 'emoji/emoji3-small.svg',
    smallNotSelect: 'emoji/emoji3-gray-small.svg',
  },
  ANGRY: {
    select: 'emoji/emoji6.svg',
    notSelect: 'emoji/emoji6-gray.svg',
    smallSelect: 'emoji/emoji6-small.svg',
    smallNotSelect: 'emoji/emoji6-gray-small.svg',
  },
  DISPLEASED: {
    select: 'emoji/emoji4.svg',
    notSelect: 'emoji/emoji4-gray.svg',
    smallSelect: 'emoji/emoji4-small.svg',
    smallNotSelect: 'emoji/emoji4-gray-small.svg',
  },
  SAD: {
    select: 'emoji/emoji5.svg',
    notSelect: 'emoji/emoji5-gray.svg',
    smallSelect: 'emoji/emoji5-small.svg',
    smallNotSelect: 'emoji/emoji5-gray-small.svg',
  },
};
