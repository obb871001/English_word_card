import { Box, Button, Stack, TextField } from '@mui/material';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserLoginMutates } from '../../hooks/user';
import { useSnackBar } from '../../hooks/useSnackBar';

/**
 * @description 歡迎頁面的註冊表單
 * @returns {JSX.Element} 表單組件
 */
const WelcomeForm = () => {
  const [formData, setFormData] = useState({
    userName: ''
  });

  const { showSuccess, showError } = useSnackBar();

  const { mutateAsync } = useUserLoginMutates();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await mutateAsync({
        username: formData.userName,
        password: '87100101'
      });

      const { access_token, refresh_token } = response;
      Cookies.set('access_token', access_token);
      Cookies.set('refresh_token', refresh_token);

      showSuccess(`歡迎 ${formData.userName}！`);

      navigate('/');
    } catch (error) {
      console.error('登入失敗:', error);
      showError('登入失敗，請檢查您的帳號和密碼。');
    }
  };

  return (
    <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          required
          label="使用者名稱"
          name="userName"
          placeholder="請輸入您的使用者名稱"
          value={formData.userName}
          variant="outlined"
          onChange={handleChange}
        />

        <Button
          fullWidth
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
        >
          開始學習
        </Button>
      </Stack>
    </Box>
  );
};

export default WelcomeForm;
