import { createSlice } from '@reduxjs/toolkit';

/**
 * SnackBar 狀態管理
 * 支援全局 SnackBar 通知
 */
const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState: {
    open: false,
    message: '',
    severity: 'info', // 'success', 'error', 'warning', 'info'
    autoHideDuration: 6000,
    action: null // 可選的操作按鈕
  },
  reducers: {
    showSnackBar: (state, action) => {
      const {
        message,
        severity = 'info',
        autoHideDuration = 6000,
        action: actionButton
      } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = severity;
      state.autoHideDuration = autoHideDuration;
      state.action = actionButton || null;
    },
    hideSnackBar: (state) => {
      state.open = false;
      state.message = '';
      state.action = null;
    },
    showSuccessSnackBar: (state, action) => {
      const { message, autoHideDuration = 4000 } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = 'success';
      state.autoHideDuration = autoHideDuration;
      state.action = null;
    },
    showErrorSnackBar: (state, action) => {
      const { message, autoHideDuration = 6000 } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = 'error';
      state.autoHideDuration = autoHideDuration;
      state.action = null;
    },
    showWarningSnackBar: (state, action) => {
      const { message, autoHideDuration = 5000 } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = 'warning';
      state.autoHideDuration = autoHideDuration;
      state.action = null;
    },
    showInfoSnackBar: (state, action) => {
      const { message, autoHideDuration = 5000 } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = 'info';
      state.autoHideDuration = autoHideDuration;
      state.action = null;
    }
  }
});

export const {
  showSnackBar,
  hideSnackBar,
  showSuccessSnackBar,
  showErrorSnackBar,
  showWarningSnackBar,
  showInfoSnackBar
} = snackBarSlice.actions;

export default snackBarSlice.reducer;
