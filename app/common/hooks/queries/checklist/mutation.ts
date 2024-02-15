import checklistApi from '@requests/checklist';
import { useMutation } from '@tanstack/react-query';

export const usePostChecklist = () => {
  return useMutation({
    mutationFn: checklistApi.postChecklist,
  });
};
