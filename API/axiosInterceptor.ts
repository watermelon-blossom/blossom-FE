import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://water-melon.p-e.kr",
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log("Request:", config);
    return config;
  },
  (error) => {
    // console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("Response:", JSON.stringify(response));
    return response.data;
  },
  (error) => {
    if (error.response) {
      // 서버가 응답을 반환한 경우
      // console.error("Response Error:", JSON.stringify(error.response.data));
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못한 경우
      // console.error("No Response Error:", JSON.stringify(error.request));
    } else {
      // 요청을 설정하는 중에 오류가 발생한 경우
      // console.error("Request Setup Error:", error.message);
    }
    // console.error("Config:", JSON.stringify(error.config));
    return Promise.reject(error);
  }
);

export default axiosInstance;
