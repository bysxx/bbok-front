import checklistApi from '@apis/checklist/checklist.client';
import useCustomRouter from '@hooks/useCustomRouter';
import { useMutation } from '@tanstack/react-query';

export const usePostChecklist = () => {
  const { push } = useCustomRouter();
  return useMutation({
    mutationFn: checklistApi.post,
    onSuccess: () => {
      push('/');
    },
  });
};
