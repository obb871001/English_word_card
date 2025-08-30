import { Outlet, useLocation, Routes, Route } from 'react-router-dom';

import GlobalSnackBar from '../common/GlobalSnackBar';
import Layout from './Layout';
import ModalLayout from './ModalLayout';
import FlashCardPage from '../../pages/FlashCardPage';
import HomePage from '../../pages/HomePage';
import WelcomePage from '../../pages/WelcomePage';
import CardsPage from '../../pages/CardsPage';

/**
 * @description AppLayout 組件，處理主要布局和 modal 路由邏輯
 * @returns {JSX.Element} AppLayout 組件
 */
const AppLayout = () => {
  const location = useLocation();
  const state = location.state;

  // 檢查是否有背景位置（表示這是一個 modal 路由）
  const backgroundLocation = state?.backgroundLocation;
  console.log(backgroundLocation);
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/flashcard"
            element={
              <ModalLayout>
                <FlashCardPage />
              </ModalLayout>
            }
          />
        </Routes>
      )}

      {/* Modal 路由 - 只在有背景位置時顯示 */}
      {/* 全局 SnackBar */}
      <GlobalSnackBar />
    </>
  );
};

export default AppLayout;
