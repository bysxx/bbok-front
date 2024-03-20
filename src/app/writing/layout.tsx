'use client';

import { WritingDiaryFormProvider } from '@features/diary/contexts';
import { PropsWithChildren } from 'react';

const WritingLayout = ({ children }: PropsWithChildren) => {
  return <WritingDiaryFormProvider>{children}</WritingDiaryFormProvider>;
};
export default WritingLayout;
