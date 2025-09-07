import { Box } from '@mui/material';

import welcomeImage from '../../assets/images/welcome_logo.png';

/**
 * @description 歡迎頁面的頭部圖片區域
 * @returns {JSX.Element} 頭部組件
 */
const WelcomeHeader = () => {
  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      height={'40dvh'}
      justifyContent={'center'}
      textAlign={'center'}
      width={'100%'}
    >
      <Box alt="介紹圖" component={'img'} src={welcomeImage} width={'200px'} />
    </Box>
  );
};

export default WelcomeHeader;
