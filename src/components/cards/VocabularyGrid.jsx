import { Grid } from '@mui/material';

import VocabularyCard from './VocabularyCard';

/**
 * @description 單字卡片網格組件
 * @param {Object} props - 組件屬性
 * @param {Array} props.vocabularies - 單字列表
 * @param {Function} [props.onCardClick] - 卡片點擊回調函數
 * @returns {JSX.Element} VocabularyGrid 組件
 */
const VocabularyGrid = ({ vocabularies, onCardClick }) => {
  return (
    <Grid container spacing={2}>
      {vocabularies.map((vocab, index) => (
        <Grid key={vocab.id || index} item size={12}>
          <VocabularyCard
            vocabulary={vocab}
            onClick={() => onCardClick?.(vocab)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default VocabularyGrid;
