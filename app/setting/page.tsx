'use client';

import BoxButton from '@components/buttons/box-button';
import Divider from '@components/divider';
import Input from '@components/input';
import Popup from '@components/popup';
import { NavTopBar } from '@components/top-bar';
import DefaultLayout from '@components/ui/layout/default-layout';
import useNameValidation from '@features/friend/hooks/useNameValidation';
import { friendInputVerifier } from '@features/friend/utils/friendInputVerifier';
import { useFriendMutation } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/Utils/useInput';
import { useState } from 'react';

const SettingPage = () => {
  const { text: value, isValid: error, onChange } = useInput('', friendInputVerifier);
  const { query } = useCustomRouter();
  const { errorMessage } = useNameValidation(value);
  const { id, name } = query;
  const { patchFriend, deleteFriend } = useFriendMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const handleModifyFriend = async () => {
    setIsLoading(true);
    await patchFriend.mutateAsync({ id: id as number, name: value });
  };

  const handleDeleteFriend = async () => {
    setModal(false);
    await deleteFriend.mutateAsync(id as number);
  };
  return (
    <>
      <Popup
        isOpen={modal}
        onClose={() => {
          setModal(false);
        }}
        label="정리"
        onClick={handleDeleteFriend}
        title="정말 관계를 정리하시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">
          관계정리를 하면 더 이상 일기를 쓸 수 없어요.
          <br />
          일기를 되살리고 싶다면 고객센터에 문의해주세요.
        </p>
      </Popup>
      <NavTopBar label="일기장 관리" href="./" />
      <DefaultLayout>
        <h2 className="text-title-3 mt-[22px] text-gray-65">친구 이름 변경</h2>

        <h5 className="mb-3 mt-[25px] text-sm font-medium text-gray-70">기존 이름</h5>
        <div className="flex h-[47px] w-full items-center rounded-xl bg-gray-10 pl-4">
          <h5 className="text-body-3 text-gray-65">{name}</h5>
        </div>
        <h5 className="mb-3 mt-[22px] text-sm font-medium text-gray-70">새로운 이름</h5>
        <div className="flex w-full gap-2">
          <div className="w-4/5">
            <Input
              inputValue={value}
              setInputValue={onChange}
              error={!error}
              placeholder="새로운 이름"
              maxLength={12}
              content="한글 또는 영문,숫자의 조합으로 12자 이내"
              errorMessage={errorMessage}
            />
          </div>
          <div className="w-1/5">
            <BoxButton
              text="변경"
              typo="body3"
              isLoading={isLoading}
              disabled={!error}
              onClick={handleModifyFriend}
              size="small"
            />
          </div>
        </div>
      </DefaultLayout>
      <Divider className="mt-[30px]" />
      <DefaultLayout>
        <h2 className="text-title-3 mb-[26px] mt-6 text-gray-65">친구 이름 변경</h2>
        <BoxButton
          size="small"
          onClick={() => {
            setModal(true);
          }}
          bg="yellow"
        >
          <div className="flex justify-between pl-5 pr-3">
            <h5 className="text-title-3 text-orange-1">가시를 뽁! 뽑기 (관계 정리하기)</h5>
            <img src="/images/icon/ui/back-orange.svg" alt="" />
          </div>
        </BoxButton>
      </DefaultLayout>
    </>
  );
};
export default SettingPage;
