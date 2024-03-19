import { TagButton } from '@components/buttons';
import Verifier from '@components/verifier';
import useCustomRouter from '@hooks/useCustomRouter';
import { IDiaryRequestBody } from '@interfaces/diary';
import { MouseEvent } from 'react';
import { useController, useFormContext } from 'react-hook-form';

const WritingTagsList = () => {
  const { push } = useCustomRouter();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<IDiaryRequestBody>();
  const { field } = useController({
    name: 'tags',
    control,
  });
  const { value, onChange } = field;

  return (
    <div
      {...register('tags', {
        required: '최대 7개까지 입력이 가능해요',
        maxLength: { value: 1, message: 'asdfg' },
      })}
    >
      <div className="mb-3 mt-8 flex items-center">
        <h2 className="mr-2 justify-center text-base font-medium text-gray-65">태그</h2>
        {(errors.tags || value) && <Verifier notice={true} text={'최대 7개까지 입력이 가능해요'} />}
      </div>
      {(() => {
        if (value.length === 0) {
          return (
            <button
              className="flex w-full items-start justify-start rounded-[10px] bg-gray-10 py-4 pl-[14px] mb-8"
              onClick={() => push('./tag')}
            >
              <h5 className="text-sm font-medium text-gray-30">입력하면 일화의 카테고리로 분류해서 볼 수 있어요</h5>
            </button>
          );
        }
        return (
          <button
            className="mt-4 flex flex-wrap gap-[10px] bg-gray-10 rounded-[10px] py-2 px-3 cursor-pointer mb-8"
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
