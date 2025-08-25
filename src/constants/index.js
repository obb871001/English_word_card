// 應用程式常數
export const APP_CONFIG = {
  APP_NAME: 'English Word Card',
  VERSION: '1.0.0',
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
};

// 本地儲存鍵值
export const STORAGE_KEYS = {
  USER_PROGRESS: 'user_progress',
  STUDY_SETTINGS: 'study_settings',
  WORD_CARDS: 'word_cards'
};

// 應用程式路由
export const ROUTES = {
  HOME: '/',
  STUDY: '/study',
  CARDS: '/cards',
  PROGRESS: '/progress',
  SETTINGS: '/settings'
};
