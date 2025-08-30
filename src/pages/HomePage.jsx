import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { Challenge, Hero, TopicGrid, WordOfDay } from '../components/home';

const HomePage = () => {
  return (
    <Box
      sx={{
        p: 2,
        gap: 4,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Hero />

      {/* 測試按鈕 */}
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <Button
          type="primary"
          component={Link}
          to="/vocabulary-cards"
          variant="contained"
        >
          查看所有單字
        </Button>
      </Stack>

      <Challenge />
      <WordOfDay />
      <TopicGrid />
    </Box>
  );
};

export default HomePage;
