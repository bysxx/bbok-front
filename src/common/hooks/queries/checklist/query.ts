import { CHECKLIST_KEYS } from '@constants/queryKeys';
import { ICheckList } from '@interfaces/checklist';
import checklistApi from '@apis/checklist';
import { ResponseDTO } from '@interfaces/common';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetChecklist = () => {
  return useQuery<ResponseDTO<ICheckList>, AxiosError>({
    queryKey: CHECKLIST_KEYS.lists(),
    queryFn: checklistApi.allchecklist,
  });
};
