import { Box, Stack } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import _, { find, findIndex, get, toNumber } from 'lodash';
import {
  useParams,
  useNavigate,
  useLocation,
  matchPath,
  generatePath
} from 'react-router-dom';

import { FlipCard } from '../components/flashcard';
import { useVocabularyQueries } from '../hooks/vocabulary';
import { LoadingState } from '../components/cards';

const CardDetailPage = () => {
  const { vocabularyList } = useVocabularyQueries();
  const { uid } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 確保 vocabularyList 存在且不為空才計算索引
  const currentCardIndex =
    vocabularyList && vocabularyList.length > 0
      ? _.findIndex(vocabularyList, { id: toNumber(uid) })
      : 0;

  // 如果沒找到匹配的卡片，預設從第一張開始
  const startIndex = currentCardIndex >= 0 ? currentCardIndex : 0;
  const { pattern } = matchPath(
    { path: '/vocabulary-cards/:uid', end: true },
    pathname
  );

  const currentPath = get(pattern, 'path', '');

  // 處理滑動事件，更新路由
  const handleMoved = (_, currentIndex) => {
    const newPath = generatePath(currentPath, { uid: currentIndex });
    navigate(newPath, { replace: true });
  };

  // 如果數據還在載入中，顯示載入狀態
  if (!vocabularyList || vocabularyList.length === 0) {
    return <LoadingState />;
  }
  return (
    <Box display={'flex'} flexDirection={'column'} height="80dvh" py={4}>
      <Stack component={'form'} flex={1} position={'relative'} width={'100%'}>
        <Splide
          style={{ height: '100%' }}
          options={{
            arrows: false,
            pagination: false,
            gap: 10,
            perMove: 1,
            perPage: 1,
            start: startIndex
          }}
          onMoved={handleMoved}
        >
          {vocabularyList?.map((voca) => {
            const mean = get(voca, 'mean', '');
            const vocabulary = get(voca, 'vocabulary', '');
            return (
              <SplideSlide key={voca.id}>
                <Box height={'100%'} px={2}>
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
              </SplideSlide>
            );
          })}
        </Splide>
      </Stack>
    </Box>
  );
};

export default CardDetailPage;
