'use client';

import { ModifyChecklistFormProvider } from '@features/checklist/contexts';
import { PropsWithChildren } from 'react';

const ModifyChecklistLayout = ({ children }: PropsWithChildren) => {
  return <ModifyChecklistFormProvider>{children}</ModifyChecklistFormProvider>;
};
export default ModifyChecklistLayout;
