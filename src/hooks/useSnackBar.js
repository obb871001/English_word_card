import { useDispatch } from 'react-redux';

import {
  showErrorSnackBar,
  showInfoSnackBar,
  showSnackBar,
  showSuccessSnackBar,
  showWarningSnackBar
} from '../store/slices/snackBarSlice';

/**
 * @description 使用 SnackBar 的自定義 hook
 * 提供便捷的方法來顯示各種類型的通知
 * @returns {Object} SnackBar 相關的方法
 */
export const useSnackBar = () => {
  const dispatch = useDispatch();

  const showSuccess = (message, autoHideDuration = 4000) => {
    dispatch(showSuccessSnackBar({ message, autoHideDuration }));
  };

  const showError = (message, autoHideDuration = 6000) => {
    dispatch(showErrorSnackBar({ message, autoHideDuration }));
  };

  const showWarning = (message, autoHideDuration = 5000) => {
    dispatch(showWarningSnackBar({ message, autoHideDuration }));
  };

  const showInfo = (message, autoHideDuration = 5000) => {
    dispatch(showInfoSnackBar({ message, autoHideDuration }));
  };

  const show = (
    message,
    severity = 'info',
    autoHideDuration = 6000,
    action = null
  ) => {
    dispatch(showSnackBar({ message, severity, autoHideDuration, action }));
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    show
  };
};
