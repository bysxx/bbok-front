'use client';

import Tab from '@components/tab';
import { useGetMyInfo } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import { MypageTab } from '@interfaces/enums';

import { MypageLayout, Profile } from '../components';
import { TAP_LIST } from '../constants';

const MyInfoPage = () => {
  const { data } = useGetMyInfo();
  const { push } = useCustomRouter();
  return (
    <MypageLayout>
      <div className="pl-7 pt-4">
        <h1 className="text-title-1 text-gray-70">내정보</h1>
      </div>
      <Profile src={data?.data.profileUrl!!} name={data?.data.memberName!!} />
      {TAP_LIST.map((tap, i) => (
        <Tab
          key={tap.value}
          divider={i !== TAP_LIST.length - 1}
          onClick={() => {
            if (tap.value === MypageTab.logout) {
              // 로그아웃 api 수행
            } else {
              push(`/mypage/${tap.value}`);
            }
          }}
          label={tap.label}
        />
      ))}
    </MypageLayout>
  );
};
export default MyInfoPage;
