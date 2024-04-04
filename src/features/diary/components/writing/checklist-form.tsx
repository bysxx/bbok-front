import { CheckList } from '@components/check-list';
import ImageLoader from '@components/imageLoader';
import { DefaultLayout } from '@components/ui/layout';
import { TYPE_CHECLIST_COMMENT } from '@features/diary/constants';
import { updateDiaryChecklist } from '@features/diary/utils/get-diary-checklist';
import type { IDiaryCheckListItem, IUserChecklistItem } from '@interfaces/checklist';
import type { IDiaryRequestBody } from '@interfaces/diary';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import Image from 'next/image';
import { useController, useFormContext } from 'react-hook-form';

interface IChecklistFormProps {
  tab: TQuery;
  goodChecklist: IUserChecklistItem[];
  badChecklist: IUserChecklistItem[];
  initialValue: IDiaryCheckListItem[];
}
const ChecklistForm = ({ tab, initialValue, goodChecklist, badChecklist }: IChecklistFormProps) => {
  const { register, control } = useFormContext<IDiaryRequestBody>();
  const { field } = useController({
    name: 'checklist',
    control,
    defaultValue: initialValue,
  });

  const handleClickChecklist = (id: number) => {
    field.onChange(updateDiaryChecklist(id, field.value));
  };
  return (
    <DefaultLayout>
      <div className="mt-6 flex items-center">
        <h1 className="text-title-1 text-gray-70">이 일화에서 친구는</h1>
        &nbsp;
        <h1 className="text-title-1 text-orange-1">어떤 친구였나요?</h1>
      </div>
      <div className="mb-5 mt-7 flex items-center">
        <Image loader={ImageLoader} src={TYPE_CHECLIST_COMMENT[tab].img} alt="" width={24} height={24} />
        <h4 className="text-title-3">{TYPE_CHECLIST_COMMENT[tab].subTitle}</h4>
      </div>
      <div {...register('checklist')}>
        {(tab === TypeQuery.good
          ? goodChecklist.filter((item) => item.isUsed)
          : badChecklist.filter((item) => item.isUsed)
        )?.map((list) => (
          <div className="mb-3" key={list.id}>
            <CheckList
              selected={field.value.filter((checklist) => checklist.id === list.id)[0]?.isChecked || false}
              label={list.criteria}
              key={list.id}
              onClick={() => {
                handleClickChecklist(list.id);
              }}
              side="right"
            />
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};
export default ChecklistForm;
