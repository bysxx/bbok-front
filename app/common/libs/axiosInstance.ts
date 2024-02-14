import { BASE_URL } from '@constants/url';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

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

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.request.use((req) => {
  return req;
});

export default axiosInstance;
