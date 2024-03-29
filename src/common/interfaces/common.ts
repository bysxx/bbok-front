export interface ResponseAPI {
  message: string;
  status: number;
}

export interface ResponseDTO<T> extends ResponseAPI {
  data: T;
}

type TErrorCode =
  | 'D003'
  | 'E001'
  | 'C001'
  | 'C002'
  | 'C003'
  | 'C004'
  | 'C005'
  | 'J001'
  | 'J002'
  | 'R001'
  | 'R002'
  | 'S001'
  | 'I001'
  | 'E001'
  | 'E004'
  | 'F002';

export interface ResponseErrorApi {
  code: TErrorCode;
  errors: string[];
  message: string;
  status: number;
}
