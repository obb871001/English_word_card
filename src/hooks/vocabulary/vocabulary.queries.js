import { useQuery } from 'react-query';

import { vocabularyAPI } from '../../api/vocabulary';

export const useVocabularyQueries = () => {
  const { data, isFetching, ...rest } = useQuery({
    queryKey: ['vocabularyList'],
    queryFn: () => vocabularyAPI.getAll(),
    select: (res) => res.data
  });

  return {
    vocabularyList: data,
    isFetching,
    ...rest
  };
};

export const useVocabularyByIdQueries = (id) => {
  const { data, isFetching, ...rest } = useQuery({
    queryKey: [`vocabularyBy${id}`],
    queryFn: () => vocabularyAPI.getById(id),
    select: (res) => res.data
  });
  return {
    vocabulary: data,
    isFetching,
    ...rest
  };
};
