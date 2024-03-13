import memberServerApi from '@apis/member/member.server';
import { PrefetchHydration } from '@components/react-query';
import { MEMBER_KEYS } from '@constants/queryKeys';

import MyCriteriaList from './my-criteria-list';

const CriteriaPage = () => {
  return (
    <PrefetchHydration queryKey={MEMBER_KEYS.lists()} queryFn={memberServerApi.getList}>
      <MyCriteriaList />
    </PrefetchHydration>
  );
};
export default CriteriaPage;
