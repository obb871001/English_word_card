import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 請求攔截器 - 自動添加 token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 回應攔截器 - 處理 token 過期
api.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // 如果是 401 且還沒重試過
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get('refresh_token');
      if (refreshToken) {
        try {
          // 用 refresh_token 取得新的 access_token
          const response = await axios.post(
            'http://localhost:8080/api/auth/refresh',
            `refresh_token=${refreshToken}`,
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          );

          const newToken = response.data.access_token;
          Cookies.set('access_token', newToken);

          // 重新執行原本的請求
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          // refresh_token 也過期了，清除 cookies 並跳轉登入
          Cookies.remove('access_token');
          Cookies.remove('refresh_token');
          window.location.href = '/welcome';
          return Promise.reject(refreshError);
        }
      } else {
        // 沒有 refresh_token，跳轉登入
        window.location.href = '/welcome';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
