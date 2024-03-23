'use client';

import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { ChecklistCount } from '@features/checklist/components/create';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { DATA } from '@features/checklist/dummy';
import { TypeQuery } from '@interfaces/enums';

const ModifyGoodChecklistPage = () => {
  // const { data } = useGetMyChecklist();
  return (
    <FooterButtonLayout text="완료" onClick={() => {}}>
      <DefaultLayout className="px-[33px]">
        <div className="mb-[34px] mt-7 flex items-center justify-between">
          <h1 className="text-title-3 text-gray-70">{DIARY_CRITERIA_TEXT[TypeQuery.good].label}</h1>
          <ChecklistCount list={DATA.goodChecklist} />
        </div>

        <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[TypeQuery.good].label}</h5>

        <form></form>
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default ModifyGoodChecklistPage;
