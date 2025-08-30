import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import { useFlashCardModal } from '../../hooks/useFlashCardModal';
const ViewWords = () => {
  const { openFlashCard } = useFlashCardModal();

  return (
    <Stack flex={1}>
      <Typography fontWeight={700} variant="h6">
        VIEW
      </Typography>
      <Stack direction={'row'} flex={1} spacing={2}>
        <Button
          fullWidth
          component={Link}
          endIcon={<BookIcon sx={{ fontSize: '2rem !important' }} />}
          to="/vocabulary-cards"
          type="primary"
          variant="contained"
          sx={{
            background: `linear-gradient(45deg, ${green[500]}, ${green[700]})`,
            py: 1,
            color: 'white',
            fontSize: '1.1rem',
            letterSpacing: '0.05rem',
            fontWeight: 900,
            '&:hover': {
              color: 'white'
            }
          }}
        >
          VIEW ALL WORDS
        </Button>

        <IconButton
          onClick={openFlashCard}
          variant="contained"
          type="primary"
          sx={{
            ml: '0 !important'
          }}
        >
          <AddIcon sx={{ fontSize: '2rem !important' }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ViewWords;
