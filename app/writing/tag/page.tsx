'use client';

import { TagButton } from '@components/buttons';
import Input from '@components/input';
import { NavTopBar } from '@components/top-bar';
import { DefaultLayout } from '@components/ui/layout';
import useInput from '@hooks/Utils/useInput';
import { useState } from 'react';

const TagDiaryPage = () => {
  const { text, onChange, onClear } = useInput('');
  const [tags, setTags] = useState<string[]>([]);

  return (
    <>
      <NavTopBar href="./diary" label="태그 추가" />
      <DefaultLayout>
        <div className="mt-3 flex w-full items-center gap-4">
          <div className="flex flex-1">
            <Input
              inputValue={text}
              setInputValue={onChange}
              placeholder="나만의 태그를 등록해보세요"
              className="flex w-full flex-1"
            />
          </div>
          <button
            className="text-body-4 text-gray-45"
            onClick={() => {
              setTags([...tags, text]);
              onClear();
            }}
          >
            추가
          </button>
        </div>
        <h1 className="mb-4 mt-5 text-base font-bold">MY 태그</h1>

        <div className="mt-4 flex flex-wrap">
          <TagButton label="가스라이팅" onClick={() => {}} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default TagDiaryPage;
