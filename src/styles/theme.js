import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: purple, // 直接使用 MUI 內建的 purple 調色板
    secondary: {
      main: purple[100] // 使用較淺的紫色作為次要顏色
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minHeight: '100dvh',
          backgroundColor: '#f5f5f5'
        }
      }
    }
  }
});

export default theme;
