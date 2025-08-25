import { Stack } from '@mui/material';

import Layout from '../components/layout/Layout';
import {
  WelcomeForm,
  WelcomeHeader,
  WelcomeTitle
} from '../components/welcome';

/**
 * @description 此為歡迎頁面組件，顯示應用程式的歡迎信息。
 * @returns {JSX.Element} 歡迎頁面組件
 */
const WelcomePage = () => {
  return (
    <Layout>
      <WelcomeHeader />

      <Stack spacing={4} sx={{ maxWidth: 400, mx: 'auto', px: 2 }}>
        <WelcomeTitle />
        <WelcomeForm />
      </Stack>
    </Layout>
  );
};

export default WelcomePage;
