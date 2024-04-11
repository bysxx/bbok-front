import type { TQuery } from '@constants/query';
import { TYPE_QUERY } from '@constants/query';

export const CHECKLIST_TABS: { tab: TQuery; content: string; modify: string }[] = [
  { tab: TYPE_QUERY.bad, content: '다음', modify: '다음' },
  { tab: TYPE_QUERY.good, content: '완료', modify: '수정' },
];

export const CHECK_LIST_TABS_COUNT = CHECKLIST_TABS.length;
