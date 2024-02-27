'use client';

import BoxButton from '@components/buttons/box-button';
import DatePicker from '@components/date-picker';
import ImageLoader from '@components/imageLoader';
import Input from '@components/input';
import Popup from '@components/popup';
import TextField from '@components/text-field';
import ToggleButton from '@components/toggle-button';
import { ButtonTopBar } from '@components/top-bar';
import { DefaultLayout } from '@components/ui/layout';
import Verifier from '@components/verifier';
import { DIARY_EMOJI, DIARY_EMOJI_ARRAY } from '@constants/emoji';
import { TEmoji } from '@constants/enums/emoji';
import useModal from '@hooks/Utils/useModal';
import useCustomRouter from '@hooks/useCustomRouter';
import Image from 'next/image';
import { useState } from 'react';

const WritingDiaryPage = () => {
  const { push } = useCustomRouter();
  const { isOpen, onClose, onOpen } = useModal();
  const [date, setDate] = useState<string>('');
  const [diary, setDiary] = useState<string>('');
  const [tag, setTag] = useState<string[]>([]);
  const [selectEmoji, setSelectEmoji] = useState<TEmoji>('ANGRY');
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        label="삭제"
        onClick={() => {
          push('/diarylist');
        }}
        title="정말 작성을 취소하시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">삭제한 일화는 다시 복구할 수 없어요.</p>
      </Popup>
      <ButtonTopBar label="일화 작성" onClick={onOpen} name="닫기" />
      <DefaultLayout>
        <h2 className="mb-3 mt-[15px] text-base font-medium text-gray-65">친구</h2>
        <Input disabled={true} inputValue="김도리" />

        <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">날짜</h2>
        <DatePicker date={date} setDate={setDate} />

        <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">친구 일화</h2>
        <TextField input={diary} setInput={setDiary} maxLength={1000} />

        <div className="mb-3 mt-8 flex items-center">
          <h2 className="mr-2 justify-center text-base font-medium text-gray-65">태그</h2>
          {tag.length === 0 && <Verifier notice={true} text="최대 7개까지 입력이 가능해요" />}
        </div>
        {(() => {
          if (tag.length === 0) {
            return (
              <button
                className="rounded-[10px] bg-gray-10 py-4 pl-[14px] w-full flex justify-start items-start"
                onClick={() => push('/writing/tag')}
              >
                <h5 className="text-sm font-medium text-gray-30">입력하면 일화의 카테고리로 분류해서 볼 수 있어요</h5>
              </button>
            );
          }
          return <button className="rounded-[10px] bg-gray-10 py-4 pl-[14px]"></button>;
        })()}

        <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">감정</h2>
        <div className="flex gap-3 justify-center">
          {DIARY_EMOJI_ARRAY.map((emoji) => (
            <Image
              className="cursor-pointer"
              loader={ImageLoader}
              width={40}
              height={40}
              key={emoji}
              src={emoji === selectEmoji ? DIARY_EMOJI[emoji].smallSelect : DIARY_EMOJI[emoji].smallNotSelect}
              onClick={() => setSelectEmoji(emoji)}
              alt=""
            />
          ))}
        </div>

        <div className="flex items-center mt-12 justify-between mb-12">
          <h2 className="text-base font-medium text-gray-65">친구 기준 체크 여부</h2>
          <ToggleButton isChecked={check} setIsChecked={setCheck} />
        </div>

        <BoxButton text="완료" onClick={() => {}} className="mb-8" />
      </DefaultLayout>
    </div>
  );
};
export default WritingDiaryPage;
