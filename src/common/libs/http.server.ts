import { baseUrl } from '@libs/config';
// eslint-disable-next-line import/no-cycle
import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

import { getAccessToken, getRefreshToken } from './cookie/manageCookie.server';
import type { HttpClient } from './http.client';
import { apiWithoutToken } from './http.client';
import { getAccessTokenServer } from './tokenValidator.server';

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export const httpServer: HttpClient = api;

httpServer.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
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
    console.log('토큰 재발급 실행');
    lock = true;
    try {
      const refreshToken = await getRefreshToken();
      const accesstoken = await getAccessTokenServer(refreshToken);
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

httpServer.interceptors.response.use(onFulfilled, onRejected);
