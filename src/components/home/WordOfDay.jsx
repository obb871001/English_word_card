import { Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { map } from 'lodash';

import { useLevelVocabularyQueries } from '../../hooks/vocabulary';

const WordOfDay = () => {
  const { vocabularyList } = useLevelVocabularyQueries(5);

  console.log(vocabularyList);
  return (
    <Stack>
      <Typography fontWeight={700} variant="h6">
        Word of today
      </Typography>
      <Stack direction="row" overflow={'scroll'} spacing={2}>
        {map(vocabularyList, (vocab) => {
          return (
            <Box key={vocab.id} bgcolor={grey[300]} borderRadius={'15px'} p={2}>
              <Typography color="textPrimary" fontWeight={700}>
                {vocab.vocabulary}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default WordOfDay;
