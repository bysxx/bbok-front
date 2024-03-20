import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';

export const CHECKLIST_TABS: {
  tab: TQuery;
  content: string;
}[] = [
  {
    tab: TypeQuery.bad,
    content: '다음',
  },
  {
    tab: TypeQuery.good,
    content: '체크완료',
  },
];

export const CHECK_LIST_TABS_COUNT = CHECKLIST_TABS.length;
