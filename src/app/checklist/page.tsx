import checklistServerApi from '@apis/checklist/checklist.server';
import { PrefetchHydration } from '@components/react-query';
import { DIARY_KEYS } from '@constants/queryKeys';
import { ChecklistCreatePage } from '@features/checklist/components/create';

const CheckListPage = () => {
  return (
    <PrefetchHydration queryKey={DIARY_KEYS.lists()} queryFn={checklistServerApi.get}>
      <ChecklistCreatePage />
    </PrefetchHydration>
  );
};
export default CheckListPage;
