import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { Challenge, Hero, TopicGrid, WordOfDay } from '../components/home';
import { green } from '@mui/material/colors';
import BookIcon from '@mui/icons-material/Book';
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
