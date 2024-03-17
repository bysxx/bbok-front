import memberServerApi from '@apis/member/member.server';
import { PrefetchHydration } from '@components/react-query';
import { MEMBER_KEYS } from '@constants/queryKeys';
import { ChecklistCriteriaPage } from '@features/checklist/components/criteria';

const ChecklistDetailLayout = () => {
  return (
    <PrefetchHydration queryKey={MEMBER_KEYS.lists()} queryFn={memberServerApi.getList}>
      <ChecklistCriteriaPage />
    </PrefetchHydration>
  );
};
export default ChecklistDetailLayout;
