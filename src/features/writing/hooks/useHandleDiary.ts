import { IDiaryDetailResponse, IDiaryRequestBody, TDiaryKey, TDiaryValue } from '@interfaces/diary';
import { useState } from 'react';
import { getDiaryChecklist } from '../utils/get-diary-checklist';

const useHandleDiary = () => {
  const [diary, setDiary] = useState<IDiaryRequestBody>({
    checklist: [],
    content: '',
    date: '',
    emoji: '',
    sticker: '',
    tags: [],
  });

  const onChangeDiary = (inputName: TDiaryKey, value: TDiaryValue) => {
    setDiary({ ...diary, [inputName]: value });
  };

  const onSetDiary = (diary: IDiaryDetailResponse) => {
    if (diary) {
      setDiary({
        checklist: getDiaryChecklist(diary.badChecklist, diary.goodChecklist),
        content: diary.content,
        date: diary.date,
        emoji: diary.emoji,
        sticker: diary.sticker,
        tags: diary.tags,
      });
    }
  };

  return {
    diary,
    onChangeDiary,
    onSetDiary,
  };
};
export default useHandleDiary;
