import { TagButton } from '@components/buttons';
import Verifier from '@components/verifier';
import type { IDiaryContextBody } from '@features/diary/contexts/type';
import useCustomRouter from '@hooks/useCustomRouter';
import type { MouseEvent } from 'react';
import { useController, useFormContext } from 'react-hook-form';

interface IWritingTagsFormProp {
  defaultValue?: string[];
}

const WritingTagsList = ({ defaultValue }: IWritingTagsFormProp) => {
  const { push } = useCustomRouter();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<IDiaryContextBody>();
  const { field } = useController({
    name: 'tags',
    control,
    defaultValue: defaultValue || [],
  });
  const { value, onChange } = field;

  return (
    <div {...register('tags')}>
      <div className="mb-3 mt-8 flex items-center">
        <h2 className="mr-2 justify-center text-base font-medium text-gray-65">태그</h2>
        {(errors.tags || value) && <Verifier notice={true} text={'최대 7개까지 입력이 가능해요'} />}
      </div>
      {(() => {
        if (value.length === 0) {
          return (
            <button
              className="mb-8 flex w-full items-start justify-start rounded-[10px] bg-gray-10 py-4 pl-[14px]"
              onClick={() => push('./tag')}
            >
              <h5 className="text-sm font-medium text-gray-30">입력하면 일화의 카테고리로 분류해서 볼 수 있어요</h5>
            </button>
          );
        }
        return (
          <button
            className="mb-8 mt-4 flex w-full cursor-pointer flex-wrap gap-[10px] rounded-[10px] bg-gray-10 px-3 py-2"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              push('./tag');
            }}
          >
            {value.map((tag, i) => (
              <TagButton
                label={tag}
                key={i}
                onClickWithEvent={(e: MouseEvent) => {
                  e.stopPropagation();
                  onChange(value.filter((t) => t !== tag));
                }}
              />
            ))}
          </button>
        );
      })()}
    </div>
  );
};
export default WritingTagsList;
