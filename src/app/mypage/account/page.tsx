'use client';

import { NavTopBar } from '@components/top-bar';
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
      />
    </div>
  );
};
export default MyPageAccountPage;
