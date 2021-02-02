import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

const singleton = (function() {
  let instance;

  function init() {
    const axiosInstance: AxiosInstance = axios.create({
      withCredentials: true,

      // 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json',
    });

    axiosInstance
      .interceptors
      .request
      .use((config) => {
        config.headers = { ...config.headers };
        return config;
      }, (error: AxiosError) => {
        message.error(error?.message ?? '请求失败');
        return Promise.reject(error);
      });

    axiosInstance
      .interceptors
      .response
      .use(responseBaseInterceptors, (error: AxiosError) => {
        message.error(error?.message ?? '请求失败');
        return Promise.reject(error);
      });

    function responseBaseInterceptors(info: AxiosResponse) {
      return info;
    }

    return axiosInstance;
  }

  return {
    getInstance(): AxiosInstance {
      return instance ? instance : instance = init();
    },
  };
}());

export function request<T = unknown>(options: AxiosRequestConfig = {}): Promise<T> {
  return singleton.getInstance()
    .request<T>(options)
    .then((info) => info.data);
}
