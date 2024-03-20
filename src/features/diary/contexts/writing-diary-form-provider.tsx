import { IDiaryRequestBody } from '@interfaces/diary';
//import { DevTool } from '@hookform/devtools';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const WritingDiaryFormProvier = ({ children }: PropsWithChildren) => {
  const methods = useForm<IDiaryRequestBody>();

  const onSubmit = (data: IDiaryRequestBody) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form className="flex size-full flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
      {/*{isMounted && <DevTool control={methods.control} />}*/}
    </FormProvider>
  );
};
export default WritingDiaryFormProvier;
