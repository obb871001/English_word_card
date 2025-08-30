import { Box } from '@mui/material';

import { Challenge, Hero, TopicGrid, WordOfDay } from '../components/home';
import ViewWords from '../components/home/ViewWords';
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
      <ViewWords />
      <Challenge />
      <WordOfDay />
      <TopicGrid />
    </Box>
  );
};

export default HomePage;
