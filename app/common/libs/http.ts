import { baseUrl } from '@libs/config';
// eslint-disable-next-line import/no-cycle
import authApi from '@requests/auth';
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { deleteCookie, getCookie } from 'cookies-next';

/**
 * 토큰 없이 api 호출 axios instance
 */
const apiWithoutToken = axios.create({
  baseURL: baseUrl,
});

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const http: HttpClient = api;
export const httpWithoutToken: HttpClient = apiWithoutToken;

httpWithoutToken.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});

/**
 * 로그인 토큰
 */
export const authToken = {
  access: (() => {
    try {
      return getCookie('accessToken');
    } catch (err) {
      return null;
    }
  })(),
  refresh: (() => {
    try {
      return getCookie('refreshToken');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = getCookie('accessToken');
    authToken.refresh = getCookie('refreshToken');
  },
  destroy: () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    authToken.access = null;
    authToken.refresh = null;
  },
};

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const onFulfilled = (res: AxiosResponse) => {
  return res.data;
};

let lock = false;

const onRejected = async (error: AxiosError) => {
  const originalConfig = error.config;
  // TODO: erro 타입 지정
  // const data = error.response?.data;

  if (originalConfig && error.response?.status === 401 && !lock) {
    lock = true;
    try {
      await authApi.refresh();
      return await apiWithoutToken
        .request({
          ...originalConfig,
          headers: {
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        })

        .finally(() => {
          lock = false;
        });
    } catch (err) {
      // ignore
    }
  }

  return Promise.reject(error);
};

http.interceptors.response.use(onFulfilled, onRejected);
