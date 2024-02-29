'use client';

import { TEmoji } from '@constants/enums/emoji';
import useHandleDiary from '@features/writing/hooks/useHandleDiary';
import { CheckEmojiPage, DiaryTagPage, DiaryWritingLayout, DiaryWritingPage } from '@features/writing/pages';

import useCustomRouter from '@hooks/useCustomRouter';

const WritingPage = () => {
  const { query } = useCustomRouter();
  const { diary, onChangeDiary } = useHandleDiary();
  const { step } = query;

  return (
    <>
      {step === '1' && (
        <CheckEmojiPage
          selectEmoji={diary.emoji}
          setSelectEmoji={(emoji: TEmoji | '') => onChangeDiary('emoji', emoji)}
        />
      )}
      {step === '2' && (
        <DiaryWritingLayout>
          <DiaryWritingPage diary={diary} setDiary={onChangeDiary} />
        </DiaryWritingLayout>
      )}
      {step === '3' && <DiaryTagPage tags={diary.tags} setTags={(value: string[]) => onChangeDiary('tags', value)} />}
    </>
  );
};
export default WritingPage;
