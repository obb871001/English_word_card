import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: '',
    email: '',
    avatar: ''
  },
  preferences: {
    language: 'zh-tw',
    theme: 'light', // 'light', 'dark'
    autoPlay: false,
    soundEnabled: true
  },
  progress: {
    totalStudied: 0,
    totalCorrect: 0,
    totalWrong: 0,
    streak: 0,
    lastStudyDate: null
  },
  achievements: [],
  isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 設定用戶資料
    setUserProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    // 設定用戶偏好
    setPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    // 更新學習進度
    updateProgress: (state, action) => {
      const { correct } = action.payload;
      state.progress.totalStudied += 1;
      if (correct) {
        state.progress.totalCorrect += 1;
        state.progress.streak += 1;
      } else {
        state.progress.totalWrong += 1;
        state.progress.streak = 0;
      }
      state.progress.lastStudyDate = new Date().toISOString();
    },
    // 重置進度
    resetProgress: (state) => {
      state.progress = {
        totalStudied: 0,
        totalCorrect: 0,
        totalWrong: 0,
        streak: 0,
        lastStudyDate: null
      };
    },
    // 新增成就
    addAchievement: (state, action) => {
      if (!state.achievements.includes(action.payload)) {
        state.achievements.push(action.payload);
      }
    },
    // 設定認證狀態
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // 登出
    logout: (state) => {
      state.profile = {
        name: '',
        email: '',
        avatar: ''
      };
      state.isAuthenticated = false;
    }
  }
});

export const {
  setUserProfile,
  setPreferences,
  updateProgress,
  resetProgress,
  addAchievement,
  setAuthenticated,
  logout
} = userSlice.actions;

export default userSlice.reducer;
