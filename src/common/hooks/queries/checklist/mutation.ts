import checklistApi from '@apis/checklist/checklist.client';
import useCustomRouter from '@hooks/useCustomRouter';
import { useMutation } from '@tanstack/react-query';

export const usePostChecklist = () => {
  const { push } = useCustomRouter();
  /**
   * 체크리스트 등록
   */
  const postChecklist = useMutation({
    mutationFn: checklistApi.post,
    onSuccess: () => {
      push('/');
    },
  });

  /**
   * 체크리스트 수정
   */
  const patchChecklist = useMutation({
    mutationFn: checklistApi.patch,
    onSuccess: () => {
      push('./checklist/detail');
    },
  });

  return {
    postChecklist,
    patchChecklist,
  };
};
