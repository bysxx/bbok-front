import type { IRequestOptions } from '@requests/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getCookie } from 'cookies-next';

import { baseUrl } from './config';

// const token =
// 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NjM1MWU2Ni03YjAwLTQwZDQtODY4ZS0yNzY2MGRkNjY4NjciLCJyb2xlIjoic29jaWFsIiwiaXNzIjoiYmJvayIsImlhdCI6MTcwNDEwMjg2NywiZXhwIjoxNzA0MTg5MjY3fQ.DJnJIjhv65kK8MDnxq6apbFxyG8Ox-WRBw6qessZja4';

const token = getCookie('accessToken');

export function request<TResponse>(path: string, options: IRequestOptions): Promise<TResponse> {
  const { query = null, method = 'GET', body, ...extraOptions } = options;

  const reqOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      // ...headers,
    },
    body,
    next: { revalidate: 60 * 60 }, // 1시간
    ...extraOptions,
  };

  if (body) {
    reqOptions.body = typeof body === 'object' ? JSON.stringify(body) : body;
  }

  let queryString = '';
  if (query) {
    queryString = new URLSearchParams(query).toString();
    queryString = queryString && `?${queryString}`;
  }

  return fetch(`${baseUrl}${path}${queryString}`, reqOptions)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}
