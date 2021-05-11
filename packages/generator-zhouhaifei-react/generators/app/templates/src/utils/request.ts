import axios, { AxiosRequestConfig } from 'axios';

export function request<T = unknown>(options: AxiosRequestConfig = {}): Promise<T> {
  return axios(options)
    .then((info) => info.data);
}
