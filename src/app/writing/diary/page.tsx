'use client';

import Input from '@components/input';
import Popup from '@components/popup';
import { ButtonTopBar } from '@components/top-bar';
import { DefaultLayout } from '@components/ui/layout';
import { WritingTagsList, WritingTextForm } from '@features/writing/components';
import WritingDateForm from '@features/writing/components/date-form';
import useCustomRouter from '@hooks/useCustomRouter';
import useModal from '@hooks/useModal';
import { useFriendStore } from '@stores/useFriendStore';

const WritingDiaryPage = () => {
  const { isOpen, onClose, onOpen } = useModal();
  const { push } = useCustomRouter();
  const { friend } = useFriendStore();

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
      <ButtonTopBar label={'일화 작성'} onClick={onOpen} name={'닫기'} />
      <DefaultLayout>
        <h2 className="mb-3 mt-[15px] text-base font-medium text-gray-65">친구</h2>
        <Input disabled={true} inputValue={friend.name} />

        <WritingDateForm />

        <WritingTextForm />

        <WritingTagsList />
      </DefaultLayout>
    </>
  );
};
export default WritingDiaryPage;
