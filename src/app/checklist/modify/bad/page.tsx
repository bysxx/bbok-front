'use client';

import { ModifyBadChecklistForm } from '@features/checklist/components/modify';
import { useGetMyChecklist } from '@hooks/queries/member';

const BadChecklistModifyPage = () => {
  const { data } = useGetMyChecklist();

  return data?.data && <ModifyBadChecklistForm defaultValue={data?.data.badChecklist} />;
};
export default BadChecklistModifyPage;
