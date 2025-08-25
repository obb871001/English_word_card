import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Button, Stack, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Challenge = () => {
  return (
    <Stack>
      <Typography fontWeight={700} variant="h6">
        Challenge
      </Typography>
      <Button
        fullWidth
        endIcon={<EmojiEventsIcon sx={{ fontSize: '3rem !important' }} />}
        type="button"
        variant="contained"
        sx={{
          background: `linear-gradient(45deg, ${deepPurple[500]}, ${deepPurple[700]})`,
          py: 1,
          color: 'white',
          fontSize: '1.1rem',
          letterSpacing: '0.05rem',
          fontWeight: 900
        }}
      >
        Start Challenge
      </Button>
    </Stack>
  );
};

export default Challenge;
