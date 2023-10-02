'use client';

import { Button, ButtonOption, SignInButton } from '@components/buttons';
import DatePicker from '@components/date-picker';
import DiaryField from '@components/diary-field';
import { RoundButton } from '@components/etc-buttons';
import EtcButton from '@components/etc-buttons/etc-button';
import Input from '@components/input';
import RadioButton from '@components/radio-button';
import SearchBar from '@components/search-bar';
import ToggleButton from '@components/toggle-button';
import { useState } from 'react';

const PreviewPage = () => {
  // 체크박스 상태

  // 라디오 버튼 상태
  const [radioChecked, setRadioChecked] = useState(false);
  // toggle 버튼 상태
  const [toggleChecked, setToggleChecked] = useState(false);
  // datepicker 상태
  const [date, setDate] = useState('');
  // 이름 input 상태
  const [inputValue, setInputValue] = useState('');
  // 태그 input 상태
  const [tagValue, setTagValue] = useState('');
  // 검색 input 상태
  const [searchInput, setSearchInput] = useState('');
  // textfield 상태
  const [textFieldValue, setTextFieldValue] = useState('');

  return (
    <div className="flex flex-col items-center p-8">
      {/* Button small */}
      <div className="m-2">
        <ButtonOption label="취소" type="gray" onClick={() => {}} />
      </div>
      <div className="m-2">
        <ButtonOption label="삭제" type="red" onClick={() => {}} />
      </div>

      {/* Button Main Medium */}
      <div className="m-2">
        <Button size="medium" onClick={() => {}} text="친구 생성" />
      </div>

      <div className="m-2">
        <Button size="large" border={true} onClick={() => {}} text="다음" />
      </div>

      <div className="m-2">
        <Button size="large" border={true} disabled={true} onClick={() => {}} text="다음" />
      </div>

      {/* Sign in button */}
      <div className="m-2">
        <SignInButton onClick={() => {}} />
      </div>

      {/* Toggle Button */}
      <div className="m-2">
        <ToggleButton isChecked={toggleChecked} setIsChecked={setToggleChecked} />
      </div>

      {/* CheckBox */}
      {/* <div className="m-2">
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      </div> */}

      {/* Radio Button */}
      <div className="m-2">
        <RadioButton isChecked={radioChecked} setIsChecked={setRadioChecked} />
      </div>

      {/* etc Button 3 */}
      <div className="m-2">
        <RoundButton label="설정" type="red" onClick={() => {}} />
      </div>
      <div className="m-2">
        <RoundButton label="친구생성" type="orange" onClick={() => {}} />
      </div>

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

      {/* name input */}
      <div className="m-2">
        <Input inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      {/* tag input */}
      <div className="m-2">
        <Input type="tag" inputValue={tagValue} setInputValue={setTagValue} />
      </div>

      {/* search bar */}
      <div className="m-2">
        <SearchBar input={searchInput} setInput={setSearchInput} onClick={() => {}} />
      </div>

      {/* date picker */}
      <div className="m-2">
        <DatePicker date={date} setDate={setDate} />
      </div>

      {/* diary field */}
      <div className="m-2">
        <DiaryField input={textFieldValue} setInput={setTextFieldValue} />
      </div>
    </div>
  );
};
export default PreviewPage;
