// import { DevTool } from '@hookform/devtools';
import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { IDiaryContextBody } from './type';

const WritingDiaryFormProvier = ({ children }: PropsWithChildren) => {
  const methods = useForm<IDiaryContextBody>();
  const onSubmit = (data: IDiaryContextBody) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form className="flex size-full flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
export default WritingDiaryFormProvier;
