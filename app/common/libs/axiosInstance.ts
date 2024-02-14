import { BASE_URL } from '@constants/url';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { deleteCookie, getCookie } from 'cookies-next';

const axiosInstance: AxiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const http: HttpClient = axiosInstance;

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
  (config: AxiosRequestConfig) => {
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

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
