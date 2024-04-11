'use client';

import BoxButton from '@components/buttons/box-button';
import CheckInput from '@components/check-input';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { TYPE_QUERY } from '@constants/query';
import { ChecklistCount, WriteCheckInput } from '@features/checklist/components';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import type { IModifyChecklistContext } from '@features/checklist/types';
import {
  getChecklistCount,
  getCreatehecklistComplete,
  getModifyChecklistBody,
  updateChecklistData,
} from '@features/checklist/utils';
import { useChecklistMutation } from '@hooks/queries/checklist';
import type { IModifyChecklistRequestBody, IUserChecklistItem } from '@interfaces/checklist';
import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import uuid from 'react-uuid';

const ModifyGoodChecklistForm = ({ defaultValue }: { defaultValue: IUserChecklistItem[] }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { patchChecklist } = useChecklistMutation();
  const { register, control } = useFormContext<IModifyChecklistContext>();
  const { field: addField } = useController({
    name: 'addedBadChecklist',
    control,
    defaultValue: [],
  });
  const { field: modifyField } = useController({
    name: 'modifiedBadChecklist',
    control,
    defaultValue,
  });

  // 체크 수정 완료 버튼 클릭 했을 때
  const handleModifyChecklist = async () => {
    setLoading(true);
    const body: IModifyChecklistRequestBody = {
      addedBadChecklist: [],
      addedGoodChecklist: getCreatehecklistComplete(addField.value),
      modifiedGoodChecklist: getModifyChecklistBody(modifyField.value),
      modifiedBadChecklist: [],
    };
    await patchChecklist.mutateAsync(body);
  };

  // 체크리스트 체크 박스 클릭했을 때
  const handleCheckItem = (item: IUserChecklistItem) => {
    modifyField.onChange(updateChecklistData(modifyField.value, item.id));
  };

  // 체크리스트 plus 버튼 클릭했을 때
  const handleAddChecklist = (item: IUserChecklistItem<string>) => {
    addField.onChange(updateChecklistData(addField.value, item.id));
  };

  // 체크리스트 plus input 체크 박스 클릭했을 때
  const handlePlusCountClick = () => {
    addField.onChange([...addField.value, { id: uuid(), criteria: '', isUsed: false }]);
  };

  // 체크리스트 plus input 삭제할 때
  const handleDeleteChecklist = (item: IUserChecklistItem<string>) => {
    addField.onChange(addField.value.filter((list) => list.id !== item.id));
  };
  return (
    <FooterButtonLayout
      text="완료"
      isLoading={loading}
      disabled={getChecklistCount<string>(addField.value) + getChecklistCount<number>(modifyField.value) !== 5}
      onClick={handleModifyChecklist}
    >
      <DefaultLayout className="px-[33px]">
        <div className="mb-[34px] mt-7 flex items-center justify-between">
          <h1 className="text-title-3 text-gray-70">{DIARY_CRITERIA_TEXT[TYPE_QUERY.good].label}</h1>
          <ChecklistCount
            num={getChecklistCount<string>(addField.value) + getChecklistCount<number>(modifyField.value)}
          />
        </div>

        <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[TYPE_QUERY.good].label}</h5>

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
export default ModifyGoodChecklistForm;
