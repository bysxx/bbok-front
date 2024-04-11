'use client';

import ImageLoader from '@components/imageLoader';
import { CancelTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import type { TEmoji } from '@constants/emoji';
import { DIARY_EMOJI, DIARY_EMOJI_ARRAY } from '@constants/emoji';
import type { IDiaryContextBody } from '@features/diary/contexts/type';
import useCustomRouter from '@hooks/useCustomRouter';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const WritingEmojiPage = () => {
  const { push } = useCustomRouter();
  const [selectEmoji, setSelectEmoji] = useState<TEmoji | null>(null);
  const { register, getValues, setValue } = useFormContext<IDiaryContextBody>();

  useEffect(() => {
    setSelectEmoji(getValues('emoji'));
  }, [getValues]);

  const handleSelectEmoji = (emoji: TEmoji) => {
    setSelectEmoji(emoji);
    setValue('emoji', emoji);
  };

  return (
    <FooterButtonLayout
      text="다음"
      onClick={() => {
        push('./diary');
      }}
      disabled={!selectEmoji}
      border={false}
    >
      <CancelTopBar
        onClick={() => {
          push('/diarylist');
        }}
      />
      <div className="mb-[52px] flex flex-1 flex-col items-center justify-center">
        <h1 className="text-title-1 mb-11 text-gray-70">쓸 일화의 감정은 어떤가요?</h1>
        <div {...register('emoji')} className="grid grid-cols-3 justify-center gap-6">
          {DIARY_EMOJI_ARRAY.map((emoji) => (
            <Image
              key={emoji}
              width={56}
              height={56}
              loader={ImageLoader}
              src={
                // eslint-disable-next-line no-nested-ternary
                !selectEmoji
                  ? DIARY_EMOJI[emoji].select
                  : selectEmoji === emoji
                    ? DIARY_EMOJI[emoji].select
                    : DIARY_EMOJI[emoji].notSelect
              }
              onClick={() => handleSelectEmoji(emoji)}
              alt=""
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </FooterButtonLayout>
  );
};
export default WritingEmojiPage;
