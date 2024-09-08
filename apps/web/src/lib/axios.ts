import base, { AxiosRequestConfig } from 'axios';

import { BACKEND_URL } from '@/lib/constant';

const axios = base.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

axios.interceptors.request.use(
  async (config) => {
    const token = window.localStorage.getItem('access_token');
    if (token) {
      const clean = token.slice(1, token.length - 1);
      config.headers['Authorization'] = `Bearer ${clean}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      !window.location.href.includes('/auth') &&
      !window.location.href.includes('/auth')
    ) {
      window.localStorage.removeItem('access_token');
      window.location.pathname = '/auth/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axios.get(url, { ...config });
  return res.data;
};

export const fetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axios.post(url, { ...config });
  return res.data;
};

export default axios;
