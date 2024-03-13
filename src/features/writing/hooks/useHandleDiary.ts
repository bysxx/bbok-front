import { IDiaryRequestBody, TDiaryKey, TDiaryValue } from '@interfaces/diary';
import { useState } from 'react';

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

  return {
    diary,
    onChangeDiary,
    setDiary,
  };
};
export default useHandleDiary;
