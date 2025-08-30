import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { deepPurple, grey, purple } from '@mui/material/colors';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * @description ModalLayout 組件，用於以 modal 形式顯示頁面內容
 * @param {Object} param0 - 組件的屬性
 * @param {React.ReactNode} param0.children - 要顯示的子組件
 * @param {boolean} [param0.fullScreen] - 是否全螢幕顯示
 * @returns {JSX.Element} ModalLayout 組件
 */
const ModalLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  // 記錄來源頁面，用於關閉 modal 時返回
  const backgroundLocation = location.state?.backgroundLocation;

  const handleClose = useCallback(() => {
    setOpen(false);
    // 如果有來源頁面，返回來源頁面；否則返回首頁
    if (backgroundLocation) {
      navigate(backgroundLocation.pathname);
    } else {
      navigate('/');
    }
  }, [backgroundLocation, navigate]);

  // 監聽 ESC 鍵關閉 modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleClose]);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      PaperProps={{
        sx: {
          minHeight: '80vh',
          backgroundColor: 'background.default',
          overflow: 'visible'
        }
      }}
      onClose={handleClose}
    >
      {/* 關閉按鈕 */}
      <IconButton
        sx={{
          position: 'absolute',
          right: -18,
          top: -18,
          zIndex: 1,
          backgroundColor: deepPurple[200],
          color: 'white',
          '&:hover': {
            backgroundColor: deepPurple[300]
          }
        }}
        onClick={handleClose}
      >
        <Close />
      </IconButton>

      <DialogContent sx={{ p: 0, height: '100%' }}>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalLayout;
