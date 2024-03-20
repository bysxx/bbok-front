import { DevTool } from '@hookform/devtools';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useIsMounted } from '@hooks/useIsMounted';
import { ICreateChecklistBody } from '../types';

const CreateChecklistFormProvier = ({ children }: PropsWithChildren) => {
  const methods = useForm<ICreateChecklistBody>();
  const isMounted = useIsMounted();

  const onSubmit = (data: ICreateChecklistBody) => {
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
export default CreateChecklistFormProvier;
