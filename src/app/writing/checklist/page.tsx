'use client';

import { NavTopBar } from '@components/top-bar';
import { CHECKLIST_TABS } from '@features/checklist/constants';
import { TYPE_CHECLIST_COMMENT } from '@features/writing/constants/type-check';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import { TQuery } from '@interfaces/enums';

const WritingChecklistPage = () => {
  const { back } = useCustomRouter();
  const { currentItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { tab } = currentItem;
  return (
    <div>
      <NavTopBar onClick={back} label={TYPE_CHECLIST_COMMENT[tab].title} />
    </div>
  );
};
export default WritingChecklistPage;
