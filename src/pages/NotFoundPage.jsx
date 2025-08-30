import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center'
      }}
    >
      <Typography gutterBottom component="h1" variant="h1">
        404
      </Typography>
      <Typography gutterBottom variant="h5">
        頁面不存在
      </Typography>
      <Button sx={{ mt: 2 }} variant="contained" onClick={() => navigate('/')}>
        回到首頁
      </Button>
    </Box>
  );
};

export default NotFoundPage;
