import { Box } from '@mui/material';
import _ from 'lodash';

import {
  EmptyState,
  ErrorState,
  LoadingState,
  VocabularyCount,
  VocabularyGrid
} from '../components/cards';
import { useVocabularyQueries } from '../hooks/vocabulary';

const CardsPage = () => {
  const { vocabularyList, isFetching, error } = useVocabularyQueries();

  // 處理卡片點擊事件
  const handleCardClick = () => {};

  // 處理載入狀態
  if (isFetching) {
    return <LoadingState />;
  }

  // 處理載入錯誤
  if (error) {
    return <ErrorState error={error} />;
  }

  // 處理空資料
  if (!vocabularyList || _.size(vocabularyList) === 0) {
    return <EmptyState />;
  }

  return (
    <Box
      sx={{
        p: 2,
        gap: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <VocabularyCount count={_.size(vocabularyList)} />

      <VocabularyGrid
        vocabularies={vocabularyList}
        onCardClick={handleCardClick}
      />
    </Box>
  );
};

export default CardsPage;
