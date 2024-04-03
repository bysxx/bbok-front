'use client';

import { WritingDiaryFormProvider } from '@features/diary/contexts';
import usePreventLeave from '@hooks/usePreventLeave';
import { type PropsWithChildren } from 'react';

const WritingLayout = ({ children }: PropsWithChildren) => {
  usePreventLeave();
  return <WritingDiaryFormProvider>{children}</WritingDiaryFormProvider>;
};
export default WritingLayout;
