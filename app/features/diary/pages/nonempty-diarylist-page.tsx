'use client';

import BoxButton from '@components/buttons/box-button';
import SearchBar from '@components/search-bar';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import DiaryList from 'app/diarylist/diary-list';
import TagButtonsList from 'app/diarylist/tag-buttons-list';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

const NonEmptyDiaryListPage = () => {
  const { push } = useCustomRouter();
  // 검색 string 옵션
  const { text, onChange } = useInput('');

  // 카테고리 옵션
  const [tag, setTag] = useState<string[]>([]);
  const handleSetTag = useCallback(
    (value: string[]) => {
      setTag(value);
    },
    [setTag],
  );

  // 시간 순 옵션
  const [time, setTime] = useState<string>('desc');
  const handleSetTime = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setTime(event.target.value);
    },
    [setTime],
  );

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">
        <div className="py-[10px]">
          <SearchBar input={text} setInput={onChange} onClick={() => {}} href="./" />
        </div>
        <TagButtonsList selectTag={tag} setSelectTag={handleSetTag} />

        <DiaryList time={time} setTime={handleSetTime} input={text} tags={tag} />
      </div>
      <div className="sticky bottom-0 mt-24 h-[90px]">
        <BoxButton
          text="일화작성"
          border={true}
          onClick={() => {
            push({ pathname: './writing', query: { step: 1 } });
          }}
        />
      </div>
    </div>
  );
};
export default NonEmptyDiaryListPage;
