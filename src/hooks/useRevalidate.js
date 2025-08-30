import { useNavigate } from 'react-router-dom';

/**
 * @description 用於重新載入路由資料的 hook
 * @returns {Object} 包含重新載入函數的物件
 */
export const useRevalidate = () => {
  const navigate = useNavigate();

  const revalidate = (path) => {
    // 使用 navigate 的 replace 選項重新載入當前路由
    navigate(path || '.', { replace: true });
  };

  const revalidateVocabularyCards = () => {
    revalidate('/vocabulary-cards');
  };

  return {
    revalidate,
    revalidateVocabularyCards
  };
};
