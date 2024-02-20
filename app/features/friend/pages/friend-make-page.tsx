'use client';

import Input from '@components/input';
import { ButtonTopBar } from '@components/top-bar';
import DefaultLayout from '@components/ui/layout/default-layout';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { useGetFriendCharater, usePostFriend } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import type { TFriendCharacter } from '@interfaces/friend';
import FriendCharacter from 'app/friend/friend-character';
import { useState } from 'react';

import { friendInputVerifier } from '../utils/friendInputVerifier';

const FriendMakePage = () => {
  const { push } = useCustomRouter();
  const { data } = useGetFriendCharater();
  const { mutate, status } = usePostFriend();
  const { text: name, isValid: error, onChange } = useInput('', friendInputVerifier);
  const [character, setCharacter] = useState<TFriendCharacter>('CACTUS');

  const handleFriendMake = () => {
    const body = {
      name,
      character,
    };
    console.log(body);
  };
  return (
    <FooterButtonLayout text="완료" border={false} disabled={!error} onClick={handleFriendMake}>
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
          {data?.data.characters &&
            data?.data.characters.map((friends) => (
              <FriendCharacter
                key={friends.type}
                selected={character === friends.type}
                character={character}
                setCharacter={setCharacter}
                type={friends.type}
                name={friends.name}
              />
            ))}
        </div>
        <h2 className="mb-4 mt-8 text-[17px] font-medium text-gray-65">친구 이름</h2>
        <Input
          inputValue={name}
          setInputValue={onChange}
          error={!error}
          placeholder="이름을 입력하세요"
          maxLength={12}
          errorMessage="한글 또는 영문,숫자의 조합으로 12자 이내"
        />
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default FriendMakePage;
