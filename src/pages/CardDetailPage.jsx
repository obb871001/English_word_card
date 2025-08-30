import { Box, Stack } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { get } from 'lodash';

import { FlipCard } from '../components/flashcard';
import { useVocabularyQueries } from '../hooks/vocabulary';

const CardDetailPage = () => {
  const { vocabularyList } = useVocabularyQueries();

  return (
    <Box display={'flex'} flexDirection={'column'} height="80dvh" py={4}>
      <Stack component={'form'} flex={1} position={'relative'} width={'100%'}>
        <Splide
          style={{ height: '100%' }}
          options={{
            arrows: false,
            pagination: false,
            gap: 10,
            perMove: 1
          }}
        >
          {vocabularyList?.map((voca) => {
            const mean = get(voca, 'mean', '');
            const vocabulary = get(voca, 'vocabulary', '');
            return (
              <Box height={'100%'} px={1} component={SplideSlide} key={voca.id}>
                <FlipCard
                  backReadOnly
                  frontReadOnly
                  backPlaceholder="請輸入筆記"
                  backValue={mean}
                  frontPlaceholder="請輸入單字"
                  frontValue={vocabulary}
                  height="100%"
                />
              </Box>
            );
          })}
        </Splide>
      </Stack>
    </Box>
  );
};

export default CardDetailPage;
