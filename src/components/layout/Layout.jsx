import { Box } from '@mui/material';
import { Fragment } from 'react';

import Footer from './Footer';
import Header from './Header';

/**
 * @description Layout 組件，用於包裹應用程式的主要內容。
 * @param {Object} param0 - 組件的屬性
 * @param {React.ReactNode} param0.children - 要顯示的子組件
 * @param {Object} [param0.sx] - 用於自定義樣式的屬性
 * @returns  {JSX.Element} Layout 組件
 */
const Layout = ({ children, sx } = {}) => {
  return (
    <Fragment>
      <Header />
      <Box
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100dvh'}
        width={'100%'}
        {...sx}
      >
        {children}
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;
