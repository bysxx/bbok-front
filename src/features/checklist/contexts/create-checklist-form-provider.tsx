import { DevTool } from '@hookform/devtools';
import { IMyCheckListResponse } from '@interfaces/checklist';
import { useIsMounted } from '@hooks/useIsMounted';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateChecklistFormProvier = ({ children }: PropsWithChildren) => {
  const methods = useForm<IMyCheckListResponse<string>>();
  const isMounted = useIsMounted();

  const onSubmit = (data: IMyCheckListResponse<string>) => {
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
