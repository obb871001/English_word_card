import { Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const WordOfDay = () => {
  return (
    <Stack>
      <Typography fontWeight={700} variant="h6">
        Word of today
      </Typography>
      <Stack direction="row" overflow={'scroll'} spacing={2}>
        <Box bgcolor={grey[300]} borderRadius={'15px'} p={2}>
          <Typography color="textPrimary" fontWeight={700}>
            expensive
          </Typography>
        </Box>
        <Box bgcolor={grey[300]} borderRadius={'15px'} p={2}>
          <Typography color="textPrimary" fontWeight={700}>
            expensive
          </Typography>
        </Box>
        <Box bgcolor={grey[300]} borderRadius={'15px'} p={2}>
          <Typography color="textPrimary" fontWeight={700}>
            expensive
          </Typography>
        </Box>
        <Box bgcolor={grey[300]} borderRadius={'15px'} p={2}>
          <Typography color="textPrimary" fontWeight={700}>
            expensive
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default WordOfDay;
