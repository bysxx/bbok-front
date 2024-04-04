'use client';

import { WritingDiaryFormProvider } from '@features/diary/contexts';
import type { PropsWithChildren } from 'react';

const DiaryMoidfyLayout = ({ children }: PropsWithChildren) => {
  return <WritingDiaryFormProvider>{children}</WritingDiaryFormProvider>;
};
export default DiaryMoidfyLayout;
