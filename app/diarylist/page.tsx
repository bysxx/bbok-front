'use client';

import { Button } from '@components/buttons';
import SearchBar from '@components/search-bar';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

import DiaryList from './diary-list';
import TagButtonsList from './tag-buttons-list';

const DiaryListPage = () => {
  const [input, setInput] = useState<string>('');

  // 카테고리 옵션
  const [tag, setTag] = useState<string[]>([]);
  const handleSetTag = useCallback(
    (value: string[]) => {
      setTag(value);
    },
    [setTag],
  );

  // 시간 순 옵션
  const [time, setTime] = useState<string>('최신순');
  const handleSetTime = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setTime(event.target.value);
    },
    [setTime],
  );

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-center py-[10px] pl-4 pr-6">
          <img src="/images/icon/ui/back.svg" alt="" className="mr-2" />
          <SearchBar input={input} setInput={setInput} onClick={() => {}} />
        </div>
        <TagButtonsList selectTag={tag} setSelectTag={handleSetTag} />

        <DiaryList time={time} setTime={handleSetTime} />
      </div>
      <div className="sticky bottom-0 mt-24 h-[90px]">
        <Button text="일화작성" onClick={() => {}} size="large" border={true} />
      </div>
    </div>
  );
};
export default DiaryListPage;
