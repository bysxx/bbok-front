'use client';

import { CancelTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import { DIARY_EMOJI, DIARY_EMOJI_ARRAY } from '@constants/emoji';
import { TEmoji } from '@constants/enums/emoji';
import useCustomRouter from '@hooks/useCustomRouter';
import { useState } from 'react';

const WritingPage = () => {
  const { push } = useCustomRouter();
  const [selectEmoji, setSelectEmoji] = useState<TEmoji | ''>('');
  return (
    <FooterButtonLayout text="다음" onClick={() => {}} disabled={selectEmoji === ''} border={false}>
      <CancelTopBar onClick={() => {}} />
      <div className="flex flex-1 flex-col items-center justify-center mb-[52px]">
        <h1 className="text-title-1 mb-11 text-gray-70">쓸 일화의 감정은 어떤가요?</h1>
        <div className="grid grid-cols-3 justify-center gap-6">
          {DIARY_EMOJI_ARRAY.map((emoji) => (
            <img
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
export default WritingPage;
