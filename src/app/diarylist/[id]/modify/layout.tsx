'use client';

import { WritingDiaryFormProvider } from '@features/diary/contexts';
import { PropsWithChildren } from 'react';

const DiaryMoidfyLayout = ({ children }: PropsWithChildren) => {
  return <WritingDiaryFormProvider>{children}</WritingDiaryFormProvider>;
};
export default DiaryMoidfyLayout;
