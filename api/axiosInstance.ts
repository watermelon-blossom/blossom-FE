import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ResponseObj } from "./api.type";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.EXPO_PUBLIC_HTTP_BASE_URL
    : "PRODUCTION_URL";

export const TOKEN = process.env.EXPO_PUBLIC_ACCESS_TOKEN;

console.log("baseURL", baseURL);

const config: AxiosRequestConfig = {
  baseURL,
};

const axiosInstance: AxiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const newConfig = TOKEN
      ? {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      : config;

    return newConfig as any;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse["data"] => {
    return res.data;
  },
  async (err: AxiosError<ResponseObj>) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
