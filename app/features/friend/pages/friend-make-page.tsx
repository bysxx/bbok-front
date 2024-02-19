'use client';

import Input from '@components/input';
import { ButtonTopBar } from '@components/top-bar';
import DefaultLayout from '@components/ui/layout/default-layout';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { useGetFriendCharater } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import { ICharacter } from '@interfaces/friend';
import FriendCharacter from 'app/friend/friend-character';


import { useState, useMemo, useCallback } from 'react';

const FriendMakePage = () => {
  const { data } = useGetFriendCharater();
  console.log(data);
  const {push} = useCustomRouter();
  const characterList: ICharacter[] = ['kaka', 'sisi'];
  // 선택한 캐릭터
  const [character, setCharacter] = useState<ICharacter>('kaka');
  // 작성한 친구 이름
  const [name, setName] = useState<string>('');
  const [nameState, setNameState] = useState<'empty' | 'success' | 'error'>('empty');

  useMemo(() => {
    if (name.length === 0) {
      setNameState('empty');
    } else if (name.length > 0 && name.length < 12) {
      setNameState('success');
    } else {
      setNameState('error');
    }
  }, [name]);

  const handleCharacterChange = useCallback(
    (data: ICharacter) => {
      setCharacter(data);
    },
    [setCharacter],
  );

  const alertText = {
    empty: {
      image: '/images/icon/ui/alert-gray.svg',
      color: 'text-gray-25',
    },
    success: {
      image: '/images/icon/ui/alert-success.svg',
      color: 'text-success',
    },
    error: {
      image: '/images/icon/ui/alert-red.svg',
      color: 'text-alert',
    },
  };

  const handleFriendMake = () => {
    const body = {
      name,
      character,
    };
    console.log(body);
  };
  return (
    <FooterButtonLayout
      text="완료"
      border={false}
      disabled={nameState === 'empty' || nameState === 'error'}
      onClick={handleFriendMake}
    >
      <ButtonTopBar
        label={'친구생성'}
        name={'닫기'}
        onClick={() => {
          push('/');
        }}
      />
      <DefaultLayout>
        <h2 className="mb-4 text-[17px] font-medium text-gray-65">캐릭터 선택</h2>
        <div className="flex items-center">
          {characterList.map((c) => (
            <FriendCharacter
              key={c}
              selected={character === c}
              character={character}
              setCharacter={handleCharacterChange}
              type={c}
            />
          ))}
        </div>
        <h2 className="mb-4 mt-8 text-[17px] font-medium text-gray-65">친구 이름</h2>
        <Input inputValue={name} setInputValue={setName} error={nameState === 'error'} />

        <div className="mt-3 flex items-center">
          <img src={alertText[nameState].image} alt="" />
          <h5 className={`text-caption-1 ml-1 ${alertText[nameState].color}`}>
            한글 또는 영문,숫자의 조합으로 12자 이내
          </h5>
        </div>
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default FriendMakePage;
