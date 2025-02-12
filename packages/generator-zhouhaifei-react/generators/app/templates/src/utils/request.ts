import { message } from 'antd';
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import qs from 'qs';
import { SYSTEM_CONFIG } from './constants';

export const requestSingleton: { getInstance: (options?: AxiosRequestConfig) => AxiosInstance } = (() => {
  let instance: AxiosInstance;

  function init(options?: AxiosRequestConfig): AxiosInstance {
    const axiosInstance: AxiosInstance = axios.create({
      timeout: 1000 * 60 * 10,
      timeoutErrorMessage: '请求超时',
      withCredentials: true,
      responseType: 'json',
      paramsSerializer: { serialize: qs.stringify as any },
      ...options,
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(SYSTEM_CONFIG.storageTokenKey);
        let Authorization = '';
        if (token) {
          Authorization = `bearer ${token}`;
        } else {
          Authorization = SYSTEM_CONFIG.authorization;
        }

        config.headers.Authorization = Authorization;
        return config;
      },
      (error: AxiosError) => {
        message.error(error?.message ?? '请求失败');
        return Promise.reject(error);
      },
    );

    axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
      message.error(error?.message ?? '请求失败');
      return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((info: AxiosResponse) => {
      const data = info.data;
      if (data == null || !('code' in data)) {
        return info;
      }

      if (data.code === 0 || data.code === 200) {
        return info;
      }

      if (data.code === 401 || data.code === 403) {
        localStorage.removeItem(SYSTEM_CONFIG.storageTokenKey);
        if (process.env.NODE_ENV !== 'development') {
          window.top.location.href = SYSTEM_CONFIG.loginPage;
          return Promise.reject();
        } else {
          const error = '登录状态已过期,请您重新登录';
          message.error({ content: error, key: error });
          return Promise.reject(info);
        }
      } else {
        const error = data.msg || '系统正在抓紧处理中';
        message.error({ key: error, content: error });
        return Promise.reject(data);
      }
    }, undefined);

    return axiosInstance;
  }

  return {
    getInstance(options?: AxiosRequestConfig): AxiosInstance {
      if (!instance) {
        instance = init(options);
      }
      return instance;
    },
  };
})();

export async function request<T = unknown>(options: AxiosRequestConfig = {}): Promise<T> {
  const info = await requestSingleton.getInstance().request<T>(options);
  return info.data;
}

const mock = new AxiosMockAdapter(requestSingleton.getInstance());

mock.onPost('/api/login').reply(200, {
  code: 200,
  msg: '',
  data: { accessToken: 'eyJhbGciOiJIUzUxMiJ9.common' },
});

mock.onPost('/api/logoff').reply(200, {
  code: 200,
  msg: '',
  data: null,
});

mock.onGet('/api/userInfo').reply(200, {
  code: 200,
  msg: '',
  data: {
    avatar: 'https://avatars.githubusercontent.com/u/52823142',
    username: 'common',
    nickname: '小林',
    // roles: ['common'],
    permissions: ['1', '2', '3', '4', '5', '6'],
    accessToken: 'eyJhbGciOiJIUzUxMiJ9.common',
  },
});
