import GradeIcon from '@mui/icons-material/Grade';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import _ from 'lodash';
import { Link } from 'react-router-dom';

/**
 * @description 單字卡片組件
 * @param {Object} props - 組件屬性
 * @param {Object} props.vocabulary - 單字資料
 * @param {Function} [props.onClick] - 點擊回調函數
 * @returns {JSX.Element} VocabularyCard 組件
 */
const VocabularyCard = ({ vocabulary, onClick }) => {
  return (
    <Card
      component={Link}
      to={vocabulary.id ? `/vocabulary-cards/${vocabulary.id}` : '#'}
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '0',
        '&:hover': {
          transition: 'transform 0.2s ease-in-out',
          transform: 'translateY(-2px)',
          boxShadow: 2
        }
      }}
      onClick={onClick}
    >
      <Box sx={{ flexGrow: 1, px: 2, py: 3, bgcolor: grey[300] }}>
        <Typography
          gutterBottom
          component="h3"
          fontWeight={'bold'}
          variant="h4"
        >
          {vocabulary.vocabulary || vocabulary.word}
        </Typography>

        {/* 顯示分類標籤 */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {vocabulary.category && (
            <Chip
              color="primary"
              label={vocabulary.category}
              size="small"
              variant="outlined"
            />
          )}
        </Box>

        {/* 難度星級 */}
        <Box position={'absolute'} right={12} top={6}>
          <Stack direction={'row'}>
            {vocabulary.difficulty &&
              _.times(vocabulary.difficulty, (i) => i).map((i) => (
                <GradeIcon
                  key={i}
                  sx={{
                    color: yellow['800']
                  }}
                />
              ))}
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default VocabularyCard;
