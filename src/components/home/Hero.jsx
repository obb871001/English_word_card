import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';

const Hero = () => {
  return (
    <Stack>
      <Stack>
        {/* <Typography gutterBottom fontSize={'16px'} fontWeight={600} mb={0}>
          歡迎來到 TOEIC 單字卡
        </Typography> */}
        <Typography gutterBottom fontWeight={'900'} variant="h4">
          Time to study!
        </Typography>
      </Stack>

      <Stack>
        <Box bgcolor={purple[300]} borderRadius={'15px'} p={2}>
          <Typography color="white" fontWeight={700}>
            Daily vocabulary boost!
          </Typography>
          <Stack alignItems={'center'} direction="row" mt={1} spacing={2}>
            <LinearProgress
              value={20}
              variant="determinate"
              sx={{
                flex: 1,
                height: 10,
                borderRadius: '20px'
              }}
            />
            <Typography color="white">20%</Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Hero;
