import { Box, Container, Stack, Typography } from '@mui/material';

/**
 * @description 網站底部組件
 * @returns {JSX.Element} Footer 組件
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        mt: 'auto',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Stack
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={2}
        >
          <Typography color="text.secondary" variant="body2">
            © 2025 TOEIC 單字卡. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography
              color="text.secondary"
              component="a"
              href="#"
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              隱私政策
            </Typography>
            <Typography
              color="text.secondary"
              component="a"
              href="#"
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              服務條款
            </Typography>
            <Typography
              color="text.secondary"
              component="a"
              href="#"
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              聯絡我們
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
