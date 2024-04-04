'use client';

import { ModifyGoodChecklistForm } from '@features/checklist/components/modify';
import { useGetMyChecklist } from '@hooks/queries/member';

const ModifyGoodChecklistPage = () => {
  const { data } = useGetMyChecklist();
  return data?.data && <ModifyGoodChecklistForm defaultValue={data?.data.goodChecklist} />;
};
export default ModifyGoodChecklistPage;
