import api from './api';

// 單字相關 API
export const userAPI = {
  // GET /api/auth/login - 登入
  login: (params = {}) =>
    api.post('/auth/login', {
      username: params.username,
      password: params.password
    }),

  // POST /api/auth/register - 註冊
  register: (params = {}) =>
    api.post('/auth/register', {
      username: params.username,
      password: params.password
    })
};
