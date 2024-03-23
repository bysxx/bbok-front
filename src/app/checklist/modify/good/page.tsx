'use client';

import BoxButton from '@components/buttons/box-button';
import { CheckInput, WriteCheckInput } from '@components/check-input';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import ChecklistCount from '@features/checklist/components/count';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { DATA } from '@features/checklist/dummy';
import { IModifyChecklistContext } from '@features/checklist/types';
import { getChecklistCount, updateChecklistData } from '@features/checklist/utils';
import { IUserChecklistItem } from '@interfaces/checklist';
import { TypeQuery } from '@interfaces/enums';
import { useFormContext, useController } from 'react-hook-form';
import uuid from 'react-uuid';

const ModifyGoodChecklistPage = () => {
  // const { data } = useGetMyChecklist();
  const { register, control } = useFormContext<IModifyChecklistContext>();
  const { field: addField } = useController({
    name: 'addedBadChecklist',
    control,
    defaultValue: [],
  });
  const { field: modifyField } = useController({
    name: 'modifiedBadChecklist',
    control,
    defaultValue: DATA.goodChecklist,
  });

  const handleCheckItem = (item: IUserChecklistItem) => {
    modifyField.onChange(updateChecklistData(modifyField.value, item.id));
  };

  const handleAddChecklist = (item: IUserChecklistItem<string>) => {
    addField.onChange(updateChecklistData(addField.value, item.id));
  };

  const handlePlusCountClick = () => {
    addField.onChange([...addField.value, { id: uuid(), criteria: '', isUsed: false }]);
  };

  const handleDeleteChecklist = (item: IUserChecklistItem<string>) => {
    addField.onChange(addField.value.filter((list) => list.id !== item.id));
  };
  return (
    <FooterButtonLayout
      text="완료"
      disabled={getChecklistCount<string>(addField.value) + getChecklistCount<number>(modifyField.value) !== 5}
      onClick={() => {}}
    >
      <DefaultLayout className="px-[33px]">
        <div className="mb-[34px] mt-7 flex items-center justify-between">
          <h1 className="text-title-3 text-gray-70">{DIARY_CRITERIA_TEXT[TypeQuery.good].label}</h1>
          <ChecklistCount num={getChecklistCount(DATA.goodChecklist)} />
        </div>

        <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[TypeQuery.good].label}</h5>

        <div {...register('modifiedGoodChecklist')}>
          {modifyField.value.map((item) => (
            <div key={item.id} className="mb-[12px]">
              <CheckInput
                selected={item.isUsed}
                label={item.criteria}
                onClick={() => {
                  handleCheckItem(item);
                }}
              />
            </div>
          ))}
        </div>
        <div {...register('addedGoodChecklist')}>
          {addField.value.map((item, i) => (
            <div className="mb-4" key={i}>
              <WriteCheckInput
                selected={item.isUsed}
                onClick={() => handleAddChecklist(item)}
                value={item}
                setValue={addField.onChange}
                onDelete={() => handleDeleteChecklist(item)}
                allList={addField.value}
              />
            </div>
          ))}
          {addField.value.length < 5 && (
            <BoxButton text="+나만의 기준추가" onClick={handlePlusCountClick} bg="orange6" color="orange1" />
          )}
        </div>
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default ModifyGoodChecklistPage;
