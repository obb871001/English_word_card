import api from './api';

// 單字相關 API
export const vocabularyAPI = {
  // GET /api/vocabulary - 取得所有單字
  getAll: (params = {}) => api.get('/vocabulary', { params }),

  // GET /api/vocabulary/:id - 取得特定單字
  getById: (id) => api.get(`/vocabulary/${id}`),

  // GET /api/vocabulary/difficulty/5 - 取得難度5的單字
  getDifficultyVocabulary: (level) =>
    api.get(`/vocabulary/difficulty/${level}`),

  // POST /api/vocabulary - 新增單字
  create: (data) =>
    api.post('/vocabulary', {
      ...data,
      category: '其他',
      difficulty: 2
    })
};
