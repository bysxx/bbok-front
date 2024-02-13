'use client';

import { SignInButton, TagButton } from '@components/buttons';
import BoxButton from '@components/buttons/box-button';
import CheckBox from '@components/check-box';
import { CheckList } from '@components/check-list';
import DatePicker from '@components/date-picker';
import DiaryField from '@components/diary-field';
import { EtcButton, RoundButton } from '@components/etc-buttons';
import Input from '@components/input';
import Modal from '@components/modal';
import RadioButton from '@components/radio-button';
import SearchBar from '@components/search-bar';
import TagLabel from '@components/tag-label';
import Text from '@components/text';
import ToggleButton from '@components/toggle-button';
import { ButtonTopBar, DiaryTopBar, NavTopBar } from '@components/top-bar';
import { useState } from 'react';

const PreviewPage = () => {
  // toggle 버튼 상태
  const [toggleChecked, setToggleChecked] = useState(false);
  // radio button
  const [radio, setRadio] = useState(false);
  // datepicker 상태
  const [date, setDate] = useState('');
  // 이름 input 상태
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('에러에러');

  // 검색 input 상태
  const [searchInput, setSearchInput] = useState('');
  // textfield 상태
  const [textFieldValue, setTextFieldValue] = useState('');

  // 모달
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col">
      <Text color="gray60" typo="title2">
        자신이 생각하는 유형의 중요도 순위를 정해주세요
      </Text>
      <Text color="gray60" typo="title3">
        자신이 생각하는 유형의 중요도 순위를 정해주세요
      </Text>
      <Text color="gray60" typo="body1">
        자신이 생각하는 유형의 중요도 순위를 정해주세요
      </Text>
      <Text color="gray60" typo="title2">
        buttons
      </Text>
      <div className="m-2">
        <BoxButton text="친구 생성" onClick={() => {}} />
      </div>
      <div className="m-2">
        <BoxButton text="친구 생성" border={true} onClick={() => {}} />
      </div>
      <div className="m-2">
        <BoxButton text="친구 생성" border={true} disabled={true} onClick={() => {}} />
      </div>
      <div className="m-2">
        <BoxButton text="삭제" onClick={() => {}} bg="alert" />
      </div>
      <div className="m-2">
        <BoxButton text="취소" onClick={() => {}} bg="gray15" textColor="gray55" />
      </div>
      <div className="m-2">
        <BoxButton text="일기쓰러 가기" typo="title4" size="large" onClick={() => {}} bg="orange4" />
      </div>
      <div className="m-2">
        <BoxButton text="+나만의 기준추가" onClick={() => {}} bg="orange6" textColor="orange1" />
      </div>
      <div className="m-2">
        <BoxButton text="나의 친구 기준 보기" size="small" onClick={() => {}} bg="orange6" textColor="orange1" />
      </div>
      <div className="m-2">
        <BoxButton size="small" onClick={() => {}} bg="yellow">
          <div className="flex justify-between pl-5 pr-3">
            <Text color="orange1" typo="title3">
              가시를 뽁! 뽑기 (관계 정리하기)
            </Text>
            <img src="/images/icon/ui/back-orange.svg" alt="" />
          </div>
        </BoxButton>
      </div>
      {/* Sign in button */}
      <div className="m-2">
        <SignInButton />
      </div>
      {/* tag button */}
      <div className="m-4 flex gap-2">
        <TagButton selected={true} label="태그1" onClick={() => {}} />
        <TagButton selected={false} label="태그1" onClick={() => {}} />
      </div>
      <h1 className="m-2">tag label</h1>
      {/* tag label */}
      <div className="flex-col">
        <TagLabel label="태그" type="orange" />
        <TagLabel label="태그" type="gray" />
      </div>
      <h1 className="m-2">check box</h1>
      <div className="m-4 flex gap-2">
        <CheckBox selected={true} onClick={() => {}} />
        <CheckBox selected={false} onClick={() => {}} />
      </div>
      <h1 className="m-2">check list</h1>
      <div className="m-2">
        {/* checklist */}
        <CheckList label={'친구 타입1'} selected={false} onClick={() => {}} />
      </div>
      <div className="m-2">
        <CheckList label={'친구 타입1'} selected={true} onClick={() => {}} />
      </div>
      <h1 className="m-2">etc buttons</h1>
      {/* etc Button */}
      <div className="m-2">
        <EtcButton type="friend" onClick={() => {}} />
      </div>
      <div className="m-2">
        <EtcButton type="solve" onClick={() => {}} />
      </div>
      <div className="m-2">
        <EtcButton type="plus" onClick={() => {}} />
      </div>
      {/* round button */}
      <div className="m-2 flex gap-2">
        <RoundButton onClick={() => {}} type="orange" label="친구생성" />
        <RoundButton onClick={() => {}} type="red" label="설정" />
      </div>
      <h1 className="m-2">toggle button</h1>
      {/* Toggle Button */}
      <div className="m-2">
        <ToggleButton isChecked={toggleChecked} setIsChecked={setToggleChecked} />
      </div>
      <h1 className="m-2">radio button</h1>
      {/* Radio Button */}
      <div className="m-2">
        <RadioButton
          isChecked={radio}
          setIsChecked={() => {
            setRadio(!radio);
          }}
        />
      </div>

      <h1 className="m-2">input</h1>
      {/* name input */}
      <div className="m-2">
        <Input inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      {/* tag input */}
      <div className="m-2">
        <Input type="tag" inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      {/* tag input */}
      <div className="m-2">
        <Input type="tag" error={true} inputValue={inputError} setInputValue={setInputError} />
      </div>

      <h1 className="m-2">search bar</h1>
      {/* search bar */}
      <div className="m-2">
        <SearchBar input={searchInput} setInput={setSearchInput} onClick={() => {}} href="/" />
      </div>

      <h1 className="m-2">date picker</h1>
      {/* date picker */}
      <div className="m-2">
        <DatePicker date={date} setDate={setDate} />
      </div>

      <h1 className="m-2">diary field</h1>
      {/* diary field */}
      <div className="m-2">
        <DiaryField input={textFieldValue} setInput={setTextFieldValue} />
      </div>

      <h1 className="m-2">top bar</h1>
      {/* button top bar */}
      <div className="m-2">
        <ButtonTopBar label="친구생성" name="닫기" onClick={() => {}} />
      </div>
      {/* diary top bar */}
      <div className="m-2">
        <DiaryTopBar label="일기장" settingClick={() => {}} />
      </div>
      {/* nav top bar */}
      <div className="m-2">
        <NavTopBar label="설정" href="/" />
      </div>

      <h1 className="m-2">modal</h1>
      {/* modal */}
      <div className="m-7">
        <BoxButton
          onClick={() => {
            setModal(true);
          }}
          text="모달 열기"
        />
      </div>
      {modal && (
        <Modal
          label="삭제"
          title="정말 삭제하시겠어요?"
          content="삭제한 일화는 다시 복구할 수 없어요."
          onClose={closeModal}
          onClick={() => {}}
        />
      )}
    </div>
  );
};
export default PreviewPage;
