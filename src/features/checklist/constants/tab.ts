import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';

export const CHECKLIST_TABS: { tab: TQuery; content: string; modify: string }[] = [
  { tab: TypeQuery.bad, content: '다음', modify: '다음' },
  { tab: TypeQuery.good, content: '완료', modify: '수정' },
];

export const CHECK_LIST_TABS_COUNT = CHECKLIST_TABS.length;
