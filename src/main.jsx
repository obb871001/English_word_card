import './styles/index.css';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
