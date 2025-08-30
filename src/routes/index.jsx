import { createBrowserRouter } from 'react-router-dom';

import { vocabularyAPI } from '../api/vocabulary';
import AppLayout from '../components/layout/AppLayout';
import CardsPage from '../pages/CardsPage';
import FlashCardPage from '../pages/FlashCardPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import WelcomePage from '../pages/WelcomePage';
import App from '../App';

// Loader 函數：載入所有單字資料
const vocabularyLoader = async () => {
  try {
    const response = await vocabularyAPI.getAll();
    return { vocabularies: response.data || [] };
  } catch (error) {
    console.error('Failed to load vocabularies:', error);
    // 即使失敗也返回空陣列，避免路由失敗
    return { vocabularies: [], error: error.message };
  }
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'welcome',
        element: <WelcomePage />
      },
      {
        path: 'vocabulary-cards',
        element: <CardsPage />,
        loader: vocabularyLoader // 預載單字資料
      },
      {
        path: 'flashcard-fullscreen',
        element: <FlashCardPage />
      }
    ]
  }
]);
