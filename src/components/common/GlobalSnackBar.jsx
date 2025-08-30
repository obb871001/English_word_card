import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { hideSnackBar } from '../../store/slices/snackBarSlice';

/**
 * @description 全局 SnackBar 組件
 * 用於顯示系統通知訊息
 * @returns {JSX.Element} GlobalSnackBar 組件
 */
const GlobalSnackBar = () => {
  const dispatch = useDispatch();
  const { open, message, severity, autoHideDuration, action } = useSelector(
    (state) => state.snackBar
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideSnackBar());
  };

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        variant="filled"
        action={action}
        onClose={handleClose}
        sx={{
          width: '100%',
          '& .MuiAlert-message': {
            fontSize: '0.95rem',
            fontWeight: 500
          }
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackBar;
