import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

const singleton = (function() {
  let instance;

  function init(): AxiosInstance {
    const axiosInstance: AxiosInstance = axios.create({
      withCredentials: true,

      /**
       * 表示服务器将响应的数据类型
       * 包括 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
       */
      responseType: 'json',
    });

    axiosInstance.interceptors.request.use((config) => {
      config.headers = { ...config.headers };
      return config;
    }, (error) => Promise.reject(error));

    axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error));

    return axiosInstance;
  }

  return {
    getInstance(): AxiosInstance {
      return instance ? instance : instance = init();
    },
  };
}());

export function request<T = unknown>(options: AxiosRequestConfig = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    singleton.getInstance()
      .request(options)
      .then((info: AxiosResponse<T>) => {
      // @ts-ignore
        if (info.data && Object.prototype.hasOwnProperty.call(info.data, 'code') && !window.envConfig.apiSuccessCode.includes(info.data.code)) {
        // @ts-ignore
          message.error(info.data.msg);
          reject(info.data);
        } else {
          resolve(info.data);
        }
      })
      .catch((info: AxiosError) => {
        message.error(info.message);
        reject(info);
      });
  });
}
