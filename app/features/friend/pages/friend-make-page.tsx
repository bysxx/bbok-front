'use client';

import Input from '@components/input';
import { ButtonTopBar } from '@components/top-bar';
import DefaultLayout from '@components/ui/layout/default-layout';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';

import { useGetFriendCharater } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import { ICharacter } from '@interfaces/friend';
import FriendCharacter from 'app/friend/friend-character';

import { useState, useCallback } from 'react';
import { friendInputVerifier } from '../utils/friendInputVerifier';



const FriendMakePage = () => {
  const { data } = useGetFriendCharater();
  const { text: value, isValid: error, onChange} = useInput('', friendInputVerifier);
  const {push} = useCustomRouter();
  const characterList: ICharacter[] = ['kaka', 'sisi'];
  // 선택한 캐릭터
  const [character, setCharacter] = useState<ICharacter>('kaka');
  // 작성한 친구 이름
  const [name, setName] = useState<string>('');

  const handleCharacterChange = useCallback(
    (data: ICharacter) => {
      setCharacter(data);
    },
    [setCharacter],
  );

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
      disabled={!error}
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
        <Input inputValue={value} setInputValue={onChange} error={!error} placeholder='이름을 입력하세요' maxLength={12} errorMessage='한글 또는 영문,숫자의 조합으로 12자 이내' />

      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default FriendMakePage;
