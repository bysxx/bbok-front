import type { ICheckList } from '@interfaces/checklist';
import { request } from '@libs/fetchRequest';
import { useMutation } from 'react-query';

import type { IRequestOptions, ResponseAPI, ResponseDTO } from './common';

// 서비스에서 제공하는 체크리스트
export const getAllCheckList = async (): Promise<ICheckList> => {
  const requestOptions: IRequestOptions = {
    method: 'GET',
  };
  try {
    // request 함수를 사용하여 API 요청
    const res = await request<ResponseDTO<ICheckList>>('/checklist', requestOptions);
    return res.data;
  } catch (error) {
    console.log('오류 발생');
    throw error;
  }
};

// 사용자가 체크리스트를 체크하거나, 혹은 등록
export const addCheckList = async (body: ICheckList): Promise<ResponseAPI> => {
  const requestOptions: IRequestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
  };
  try {
    const res = await request<ResponseAPI>('/checklist', requestOptions);
    return res;
  } catch (error) {
    console.log('오류 발생');
    throw error;
  }
};

export const useAddCheckList = () => {
  // const queryClient = useQueryClient();
  const mutation = useMutation(addCheckList, {
    onSuccess: () => {
      // queryClient.invalidateQueries(['comment']);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutation };
};
