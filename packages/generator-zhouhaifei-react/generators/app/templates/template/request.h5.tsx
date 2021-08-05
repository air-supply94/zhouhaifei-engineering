import { Toast } from 'antd-mobile';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

const singleton = (function() {
  let instance: AxiosInstance;

  function init() {
    const axiosInstance: AxiosInstance = axios.create({
      timeout: 30000,
      timeoutErrorMessage: '请求超时',
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
        Toast.fail(error?.message ?? '请求失败');
        return Promise.reject(error);
      });

    axiosInstance
      .interceptors
      .response
      .use(undefined, (error: AxiosError) => {
        Toast.fail(error?.message ?? '请求失败');
        return Promise.reject(error);
      });

    axiosInstance
      .interceptors
      .response
      .use(responseBaseInterceptors, undefined);

    function responseBaseInterceptors(info: AxiosResponse) {
      return info;
    }

    return axiosInstance;
  }

  return {
    getInstance(): AxiosInstance {
      if (instance) {
        return instance;
      } else {
        instance = init();
        return instance;
      }
    },
  };
}());

export function request<T = unknown>(options: AxiosRequestConfig = {}): Promise<T> {
  // 错误情况还需要处理的请自行处理。这里无法处理
  return singleton.getInstance()
    .request<T>(options)
    .then((info) => info.data);
}
