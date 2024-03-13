'use client';

import ImageLoader from '@components/imageLoader';
import { CancelTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import { DIARY_EMOJI, DIARY_EMOJI_ARRAY } from '@constants/emoji';
import { TEmoji } from '@constants/enums';
import useCustomRouter from '@hooks/useCustomRouter';
import Image from 'next/image';

interface ICheckEmojiPage {
  selectEmoji: TEmoji | '';
  setSelectEmoji: (value: TEmoji | '') => void;
}
const CheckEmojiPage = ({ selectEmoji, setSelectEmoji }: ICheckEmojiPage) => {
  const { push } = useCustomRouter();
  return (
    <FooterButtonLayout
      text="다음"
      onClick={() => {
        push({ pathname: './writing', query: { step: 2 } });
      }}
      disabled={selectEmoji === ''}
      border={false}
    >
      <CancelTopBar
        onClick={() => {
          push('./diarylist');
        }}
      />
      <div className="mb-[52px] flex flex-1 flex-col items-center justify-center">
        <h1 className="text-title-1 mb-11 text-gray-70">쓸 일화의 감정은 어떤가요?</h1>
        <div className="grid grid-cols-3 justify-center gap-6">
          {DIARY_EMOJI_ARRAY.map((emoji) => (
            <Image
              key={emoji}
              width={56}
              height={56}
              loader={ImageLoader}
              src={
                selectEmoji === ''
                  ? DIARY_EMOJI[emoji].select
                  : selectEmoji === emoji
                    ? DIARY_EMOJI[emoji].select
                    : DIARY_EMOJI[emoji].notSelect
              }
              onClick={() => setSelectEmoji(emoji)}
              alt=""
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </FooterButtonLayout>
  );
};
export default CheckEmojiPage;
