'use client';

import Tab from '@components/tab';
import { NavTopBar } from '@components/top-bar';
import { ACCOUNT_TAB_LIST } from '@features/mypage/constants';
import useCustomRouter from '@hooks/useCustomRouter';

const MyPageAccountPage = () => {
  const { push } = useCustomRouter();
  return (
    <div>
      <NavTopBar
        onClick={() => {
          push('/mypage');
        }}
        label="내 계정"
        className="mb-[10px]"
      />
      {ACCOUNT_TAB_LIST.map((tap, i) => (
        <Tab key={tap.value} divider={i !== ACCOUNT_TAB_LIST.length - 1} onClick={() => {}} label={tap.label} />
      ))}
    </div>
  );
};
export default MyPageAccountPage;
