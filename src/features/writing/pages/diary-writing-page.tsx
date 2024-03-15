'use client';

import { TagButton } from '@components/buttons';
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
import { CheckNotNextPage } from '@features/writing/utils/check-next-page';
import useCustomRouter from '@hooks/useCustomRouter';
import useModal from '@hooks/Utils/useModal';
import { IDiaryRequestBody, TDiaryKey, TDiaryValue } from '@interfaces/diary';
import { useFriendStore } from '@stores/useFriendStore';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';

interface IDiaryWritingPageProps {
  diary: IDiaryRequestBody;
  setDiary: (inputName: TDiaryKey, value: TDiaryValue) => void;
  type?: 'create' | 'modify';
  id?: number;
}
const DiaryWritingPage = ({ diary, setDiary, type = 'create', id }: IDiaryWritingPageProps) => {
  const { push } = useCustomRouter();
  const { isOpen, onClose, onOpen } = useModal();
  const { friend } = useFriendStore();
  const [check, setCheck] = useState<boolean>(false);

  const onClickToBarButton = () => {
    if (type === 'create') {
      onOpen();
    } else if (type === 'modify' && id) {
      // TODO: 일화 수정 api 호출
      console.log(diary);
    }
  };

  return (
    <>
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
      <ButtonTopBar
        label={type === 'create' ? '일화 작성' : '일화 수정'}
        onClick={onClickToBarButton}
        name={type === 'create' ? '닫기' : '완료'}
      />
      <DefaultLayout>
        <h2 className="mb-3 mt-[15px] text-base font-medium text-gray-65">친구</h2>
        <Input disabled={true} inputValue={friend.name} />

        <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">날짜</h2>
        <DatePicker date={diary.date} setDate={(value) => setDiary('date', value)} />

        <h2 className="mb-3 mt-8 text-base font-medium text-gray-65">친구 일화</h2>
        <TextField input={diary.content} setInput={(value) => setDiary('content', value)} maxLength={1000} />

        <div className="mb-3 mt-8 flex items-center">
          <h2 className="mr-2 justify-center text-base font-medium text-gray-65">태그</h2>
          {diary.tags.length === 0 && <Verifier notice={true} text="최대 7개까지 입력이 가능해요" />}
        </div>
        {(() => {
          if (diary.tags.length === 0) {
            return (
              <button
                className="flex w-full items-start justify-start rounded-[10px] bg-gray-10 py-4 pl-[14px] mb-8"
                onClick={() => push({ pathname: './writing', query: { step: 3 } })}
              >
                <h5 className="text-sm font-medium text-gray-30">입력하면 일화의 카테고리로 분류해서 볼 수 있어요</h5>
              </button>
            );
          }
          return (
            <div
              className="mt-4 flex flex-wrap gap-[10px] bg-gray-10 rounded-[10px] py-2 px-3 cursor-pointer mb-8"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                if (type === 'create') {
                  push({ pathname: './writing', query: { step: 3 } });
                } else if (type === 'modify') {
                  push({ pathname: './modify', query: { type: 'tag' } });
                }
              }}
            >
              {diary.tags.map((tag, i) => (
                <TagButton
                  label={tag}
                  key={i}
                  onClickWithEvent={(e: MouseEvent) => {
                    e.stopPropagation();
                    setDiary(
                      'tags',
                      diary.tags.filter((value) => value !== tag),
                    );
                  }}
                />
              ))}
            </div>
          );
        })()}

        {type === 'create' && (
          <>
            <h2 className="mb-3 text-base font-medium text-gray-65">감정</h2>
            <div className="flex justify-center gap-3">
              {DIARY_EMOJI_ARRAY.map((emoji) => (
                <Image
                  className="cursor-pointer"
                  loader={ImageLoader}
                  width={40}
                  height={40}
                  key={emoji}
                  src={emoji === diary.emoji ? DIARY_EMOJI[emoji].smallSelect : DIARY_EMOJI[emoji].smallNotSelect}
                  onClick={() => setDiary('emoji', emoji)}
                  alt=""
                />
              ))}
            </div>

            <div className="my-12 flex items-center justify-between">
              <h2 className="text-base font-medium text-gray-65">친구 기준 체크 여부</h2>
              <ToggleButton isChecked={check} setIsChecked={setCheck} />
            </div>

            <BoxButton
              text="완료"
              disabled={CheckNotNextPage(diary)}
              onClick={() => push({ pathname: './writing', query: { step: 4, type: 'bad' } })}
              className="mb-8"
            />
          </>
        )}
      </DefaultLayout>
    </>
  );
};
export default DiaryWritingPage;
