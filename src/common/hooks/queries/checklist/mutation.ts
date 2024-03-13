import checklistApi from '@apis/checklist';
import useCustomRouter from '@hooks/useCustomRouter';
import { useMutation } from '@tanstack/react-query';

export const usePostChecklist = () => {
  const { push } = useCustomRouter();
  return useMutation({
    mutationFn: checklistApi.postChecklist,
    onSuccess: () => {
      push('/');
    },
  });
};
