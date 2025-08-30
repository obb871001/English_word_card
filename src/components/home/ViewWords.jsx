import BookIcon from '@mui/icons-material/Book';
import { Button, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const ViewWords = () => {
  return (
    <Stack>
      <Typography fontWeight={700} variant="h6">
        VIEW
      </Typography>
      <Button
        fullWidth
        component={Link}
        endIcon={<BookIcon sx={{ fontSize: '3rem !important' }} />}
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
    </Stack>
  );
};

export default ViewWords;
