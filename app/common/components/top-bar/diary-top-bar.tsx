'use client';

import { RoundButton } from '@components/etc-buttons';

interface DiaryTopBarProps {
  label: string;
  settingClick: () => void;
}
const DiaryTopBar = ({ label, settingClick }: DiaryTopBarProps) => {
  return (
    <div className="flex w-full items-center justify-between py-4 pl-7 pr-4">
      <h1 className="text-title-1">{label}</h1>
      <RoundButton label="설정" type="red" onClick={settingClick} />
    </div>
  );
};
export default DiaryTopBar;
