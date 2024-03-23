import checklistApi from '@apis/checklist/checklist.client';
import { MEMBER_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useChecklistMutation = () => {
  const { push } = useCustomRouter();
  const queryClient = useQueryClient();
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
      push('/checklist/detail');
      queryClient.invalidateQueries({ queryKey: MEMBER_KEYS.lists() });
    },
  });

  return {
    postChecklist,
    patchChecklist,
  };
};
