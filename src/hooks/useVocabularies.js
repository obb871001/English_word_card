import { useEffect, useState } from 'react';

import { vocabularyAPI } from '../api/vocabulary';

/**
 * @description 用於載入單字資料的 hook
 * @returns {Object} 包含 vocabularies, loading, error 和 refetch 函數
 */
export const useVocabularies = () => {
  const [vocabularies, setVocabularies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVocabularies = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await vocabularyAPI.getAll();
      setVocabularies(response.data || []);
    } catch (err) {
      console.error('Failed to load vocabularies:', err);
      setError(err.message);
      setVocabularies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVocabularies();
  }, []);

  return {
    vocabularies,
    loading,
    error,
    refetch: fetchVocabularies
  };
};
