import checklistServerApi from '@apis/checklist/checklist.server';
import { PrefetchHydration } from '@components/react-query';
import { CHECKLIST_KEYS } from '@constants/queryKeys';
import { ChecklistCreatePage } from '@features/checklist/components/create';

const CheckListPage = () => {
  return (
    <PrefetchHydration queryKey={CHECKLIST_KEYS.lists()} queryFn={checklistServerApi.get}>
      <ChecklistCreatePage />
    </PrefetchHydration>
  );
};
export default CheckListPage;
