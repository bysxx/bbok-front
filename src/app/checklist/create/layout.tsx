'use client';

import { CreateChecklistFormProvider } from '@features/checklist/contexts';
import { PropsWithChildren } from 'react';

const CreateChecklistLayout = ({ children }: PropsWithChildren) => {
  return <CreateChecklistFormProvider>{children}</CreateChecklistFormProvider>;
};
export default CreateChecklistLayout;
