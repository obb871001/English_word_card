import AddIcon from '@mui/icons-material/Add';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useFlashCardModal } from '../../hooks/useFlashCardModal';

const Header = ({ title = 'TOEIC 單字卡', onMenuClick }) => {
  const { openFlashCard } = useFlashCardModal();

  return (
    <AppBar
      color="primary"
      elevation={1}
      position="sticky"
      sx={{ display: { xs: 'flex', md: 'none' } }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        {/* <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          sx={{ mr: 1 }}
          component={Link}
          to={-1}
        >
          <Typography fontSize={'small'}>返回</Typography>
        </IconButton> */}

        <Typography
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700, textAlign: 'center' }}
          variant="h6"
        >
          <Link to="/">{title}</Link>
        </Typography>

        {/* 快速開啟 FlashCard 按鈕 */}
        <IconButton
          aria-label="add flashcard"
          color="inherit"
          onClick={openFlashCard}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
