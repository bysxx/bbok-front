import {
  IDiaryDetailResponse,
  IDiaryListChecklist,
  IDiaryRequestBody,
  TDiaryKey,
  TDiaryValue,
} from '@interfaces/diary';
import { useState } from 'react';
import { getDiaryChecklist } from '../utils/get-diary-checklist';

const useHandleDiary = () => {
  const [diary, setDiary] = useState<IDiaryRequestBody>({
    checklist: [],
    content: '',
    date: '',
    emoji: null,
    sticker: '',
    tags: [],
  });
  const [goodChecklist, setGoodChecklist] = useState<IDiaryListChecklist[]>([]);
  const [badChecklist, setBadChecklist] = useState<IDiaryListChecklist[]>([]);

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
      setGoodChecklist(diary.goodChecklist);
      setBadChecklist(diary.badChecklist);
    }
  };

  return {
    diary,
    onChangeDiary,
    onSetDiary,
    goodChecklist,
    setGoodChecklist,
    badChecklist,
    setBadChecklist,
  };
};
export default useHandleDiary;
