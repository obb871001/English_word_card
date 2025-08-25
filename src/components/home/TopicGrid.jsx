import { Box, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const TopicGrid = () => {
  return (
    <Stack>
      <Typography fontWeight={700} variant="h6">
        Topic
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor={grey[300]} borderRadius={'15px'} p={2}>
            <Typography color="textPrimary" fontWeight={700}>
              expensive
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={grey[300]} borderRadius={'15px'} p={2}>
            <Typography color="textPrimary" fontWeight={700}>
              expensive
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TopicGrid;
