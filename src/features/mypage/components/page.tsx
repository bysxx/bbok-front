'use client';

import Tab from '@components/tab';
import { useGetMyInfo } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import { clearTokens } from '@libs/cookie/manageCookie.client';
import { showSuccessToast } from '@libs/showToast';

import { MYPAGE_TAB, TAP_LIST } from '../constants';
import Profile from './profile';

const MyInfoPage = () => {
  const { data } = useGetMyInfo();
  const { push } = useCustomRouter();
  return (
    <>
      <div className="pl-7 pt-4">
        <h1 className="text-title-1 text-gray-70">내정보</h1>
      </div>
      <Profile src={data?.data.profileUrl || ''} name={data?.data.memberName || ''} />
      {TAP_LIST.map((tap, i) => (
        <Tab
          key={tap.value}
          divider={i !== TAP_LIST.length - 1}
          onClick={() => {
            if (tap.value === MYPAGE_TAB.logout) {
              clearTokens();
              push('/login');
              showSuccessToast('성공적으로 로그아웃되었어요');
            } else {
              push(`/mypage/${tap.value}`);
            }
          }}
          label={tap.label}
        />
      ))}
    </>
  );
};
export default MyInfoPage;
