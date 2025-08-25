import api from './api';

// 單字相關 API
export const vocabularyAPI = {
  // GET /api/vocabulary - 取得所有單字
  getAll: (params = {}) => api.get('/vocabulary', { params }),

  // POST /api/vocabulary - 新增單字
  create: (data) =>
    api.post('/vocabulary', {
      ...data,
      category: '其他',
      difficulty: 3
    })
};
