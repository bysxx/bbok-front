import memberServerApi from '@apis/member/member.server';
import { PrefetchHydration } from '@components/react-query';
import { MEMBER_KEYS } from '@constants/queryKeys';
import { MyInfoPage } from '@features/mypage/pages';

export default function MyPage() {
  return (
    <PrefetchHydration queryKey={MEMBER_KEYS.details()} queryFn={memberServerApi.get}>
      <MyInfoPage />
    </PrefetchHydration>
  );
}
