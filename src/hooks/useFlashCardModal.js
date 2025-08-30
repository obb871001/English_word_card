import { useLocation, useNavigate } from 'react-router-dom';

/**
 * @description 用於開啟 FlashCard modal 的 hook
 * @returns {Object} 包含各種開啟 FlashCard 方式的函數
 */
export const useFlashCardModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openFlashCard = () => {
    // 將當前位置傳遞給 modal，以便關閉時返回
    navigate('/flashcard', {
      state: { backgroundLocation: location }
    });
  };

  return {
    openFlashCard
  };
};
