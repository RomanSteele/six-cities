import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';


const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (isCheckedAuth: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        isCheckedAuth.headers = isCheckedAuth.headers ?? {};
        isCheckedAuth.headers['X-Token'] = token;
      }
      return isCheckedAuth;
    },
  );

  return api;
};
