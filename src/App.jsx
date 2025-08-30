import './styles/App.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import GlobalSnackBar from './components/common/GlobalSnackBar';
import Layout from './components/layout/Layout';
import ModalLayout from './components/layout/ModalLayout';
import FlashCardPage from './pages/FlashCardPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import CardsPage from './pages/CardsPage';
import CardDetailPage from './pages/CardDetailPage';

function App() {
  const location = useLocation();
  const state = location.state;

  // 檢查是否有背景位置（表示這是一個 modal 路由）
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      <Layout>
        {/* 主要路由 - 背景頁面 */}
        <Routes location={backgroundLocation || location}>
          <Route index element={<HomePage />} />
          <Route element={<WelcomePage />} path="/welcome" />
          <Route element={<CardsPage />} path="/vocabulary-cards" />
          <Route element={<FlashCardPage />} path="/flashcard" />
          <Route
            element={<FlashCardPage />}
            path="/vocabulary-cards/flashcard"
          />
          <Route element={<CardDetailPage />} path="/vocabulary-cards/:uid" />
        </Routes>

        {/* Modal 路由 - 只在有背景位置時顯示 */}
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
            <Route
              path="/vocabulary-cards/flashcard"
              element={
                <ModalLayout>
                  <FlashCardPage />
                </ModalLayout>
              }
            />
          </Routes>
        )}
      </Layout>

      {/* 全局 SnackBar */}
      <GlobalSnackBar />
    </>
  );
}

export default App;
