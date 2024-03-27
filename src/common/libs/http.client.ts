import { baseUrl } from '@libs/config';
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

import { getAccessToken, getRefreshToken } from './cookie/manageCookie.client';
// eslint-disable-next-line import/no-cycle
import { getAccessTokenClient } from './tokenValidator.client';

/**
 * 토큰 없이 api 호출 axios instance
 */
export const apiWithoutToken = axios.create({
  baseURL: baseUrl,
});

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
}

export const http: HttpClient = api;
export const httpWithoutToken: HttpClient = apiWithoutToken;

httpWithoutToken.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();
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
      const refreshToken = await getRefreshToken();
      const accesstoken = await getAccessTokenClient(refreshToken);
      if (accesstoken) {
        return await apiWithoutToken
          .request({
            ...originalConfig,
            headers: {
              Authorization: `Bearer ${accesstoken}`,
            },
          })
          .finally(() => {
            lock = false;
          });
      }
      lock = false;
      window.location.href = '/login';
    } catch (err) {
      // ignore
      window.location.href = '/login';
      return Promise.reject(err);
    }
  }

  return Promise.reject(error);
};

http.interceptors.response.use(onFulfilled, onRejected);
