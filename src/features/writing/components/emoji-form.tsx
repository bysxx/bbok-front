'use client';

import ImageLoader from '@components/imageLoader';
import ToggleButton from '@components/toggle-button';
import { DIARY_EMOJI, DIARY_EMOJI_ARRAY } from '@constants/emoji';
import { IDiaryRequestBody } from '@interfaces/diary';
import { TEmoji } from '@interfaces/enums';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const WritingEmojiForm = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [selectEmoji, setSelectEmoji] = useState<TEmoji | null>(null);
  const { register, getValues, setValue } = useFormContext<IDiaryRequestBody>();

  useEffect(() => {
    setSelectEmoji(getValues('emoji'));
  }, [getValues]);

  const handleSelectEmoji = (emoji: TEmoji) => {
    setSelectEmoji(emoji);
    setValue('emoji', emoji);
  };
  return (
    <>
      <h2 className="mb-3 text-base font-medium text-gray-65">감정</h2>
      <div className="flex justify-center gap-3" {...register('emoji')}>
        {DIARY_EMOJI_ARRAY.map((emoji) => (
          <Image
            className="cursor-pointer"
            loader={ImageLoader}
            width={40}
            height={40}
            key={emoji}
            src={emoji === selectEmoji ? DIARY_EMOJI[emoji].smallSelect : DIARY_EMOJI[emoji].smallNotSelect}
            onClick={() => handleSelectEmoji(emoji)}
            alt=""
          />
        ))}
      </div>

      <div className="my-12 flex items-center justify-between">
        <h2 className="text-base font-medium text-gray-65">친구 기준 체크 여부</h2>
        <ToggleButton isChecked={check} setIsChecked={setCheck} />
      </div>
    </>
  );
};
export default WritingEmojiForm;
