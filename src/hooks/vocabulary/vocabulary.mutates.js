import { useMutation, useQueryClient } from 'react-query';

import { vocabularyAPI } from '../../api/vocabulary';

/**
 * @description 創建單字卡
 * @returns {Object} mutation object
 */
export const useVocabularyMutates = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => vocabularyAPI.create(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['vocabularyList'],
        exact: false
      });
    }
  });
};
