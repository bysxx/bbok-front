import { DevTool } from '@hookform/devtools';
import { useIsMounted } from '@hooks/useIsMounted';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IModifyChecklistContext } from '../types';

const ModifyChecklistFormProvier = ({ children }: PropsWithChildren) => {
  const methods = useForm<IModifyChecklistContext>();
  const isMounted = useIsMounted();

  const onSubmit = (data: IModifyChecklistContext) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form className="flex size-full flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};
export default ModifyChecklistFormProvier;
