import { Stack, Typography } from '@mui/material';

/**
 * @description 歡迎頁面的標題區域
 * @returns {JSX.Element} 標題組件
 */
const WelcomeTitle = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h3">TOEIC 單字卡</Typography>
      <Typography color="text.secondary" variant="h6">
        註冊開始你的學習之旅
      </Typography>
    </Stack>
  );
};

export default WelcomeTitle;
