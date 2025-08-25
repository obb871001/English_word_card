import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = ({ title = 'TOEIC 單字卡', onMenuClick }) => {
  return (
    <AppBar
      color="primary"
      elevation={1}
      position="sticky"
      sx={{ display: { xs: 'flex', md: 'none' } }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          sx={{ mr: 1 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700, textAlign: 'center' }}
          variant="h6"
        >
          {title}
        </Typography>

        {/* 占位，保持標題置中 */}
        <div style={{ width: 40 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
