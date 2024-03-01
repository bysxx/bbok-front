'use client';

import { TagButton } from '@components/buttons';
import Input from '@components/input';
import { NavTopBar } from '@components/top-bar';
import { DefaultLayout } from '@components/ui/layout';
import Verifier from '@components/verifier';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import type { KeyboardEvent } from 'react';
import { useEffect, useState } from 'react';

interface IDiaryTagPageProps {
  tags: string[];
  setTags: (value: string[]) => void;
}
const DiaryTagPage = ({ tags, setTags }: IDiaryTagPageProps) => {
  const { text, onChange, onClear } = useInput('');
  const [error, setError] = useState<boolean>(false);
  const { push } = useCustomRouter();

  useEffect(() => {
    if (tags.length < 7 || text.length === 0) {
      setError(false);
    }
  }, [tags, text]);

  const onPlustTag = () => {
    const isInTags = tags.includes(text);
    setError(tags.length === 7);
    if (isInTags && tags.length !== 7) {
      onClear();
    } else if (isInTags && tags.length === 7) {
      setError(true);
    } else if (text.length > 0 && !isInTags && tags.length < 7) {
      setTags([...tags, text]);
      onClear();
    }
  };

  const onEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && text.length > 0) {
      onPlustTag();
    }
  };

  return (
    <>
      <NavTopBar label="태그 추가" onClick={() => push({ pathname: './writing', query: { step: 2 } })} />
      <DefaultLayout>
        <div className="mt-3 flex w-full items-center gap-4">
          <div className="flex flex-1">
            <Input
              inputValue={text}
              setInputValue={onChange}
              placeholder="나만의 태그를 등록해보세요"
              className="flex w-full flex-1"
              onKeyDown={onEnterPress}
            />
          </div>
          <button className="text-body-4 text-gray-45" onClick={onPlustTag}>
            추가
          </button>
        </div>
        {error && <Verifier state={!error} errorMessage="최대 7개까지 선택이 가능합니다" />}

        <h1 className="mb-4 mt-5 text-base font-bold">MY 태그</h1>

        <div className="mt-4 flex flex-wrap gap-[10px]">
          {tags.map((tag, i) => (
            <TagButton
              label={tag}
              key={i}
              onClick={() => {
                setTags(tags.filter((value) => value !== tag));
              }}
            />
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default DiaryTagPage;