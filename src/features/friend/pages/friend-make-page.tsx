'use client';

import Input from '@components/input';
import { ButtonTopBar } from '@components/top-bar';
import DefaultLayout from '@components/ui/layout/default-layout';
import FooterButtonLayout from '@components/ui/layout/footer-button-layout';
import { useFriendMutation, useGetFriendCharater } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/useInput';

import { useState } from 'react';

import useNameValidation from '../hooks/useNameValidation';
import { friendInputVerifier } from '../utils/friendInputVerifier';
import { TCharacter } from '@interfaces/enums';
import FriendCharacter from 'src/app/friend/friend-character';

const FriendMakePage = () => {
  const { push } = useCustomRouter();
  const { data } = useGetFriendCharater();
  const { postfriend } = useFriendMutation();
  const { text: name, isValid: error, onChange } = useInput('', friendInputVerifier);
  const { errorMessage } = useNameValidation(name);
  const [character, setCharacter] = useState<TCharacter>('CACTUS');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFriendMake = async () => {
    setIsLoading(true);
    const body = {
      name,
      character,
    };
    await postfriend.mutateAsync(body);
  };
  return (
    <FooterButtonLayout text="완료" border={false} disabled={!error} onClick={handleFriendMake} isLoading={isLoading}>
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
          errorMessage={errorMessage}
          content="한글 또는 영문,숫자의 조합으로 12자 이내"
        />
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default FriendMakePage;
