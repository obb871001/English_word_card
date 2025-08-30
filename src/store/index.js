import { configureStore } from '@reduxjs/toolkit';

import snackBarReducer from './slices/snackBarSlice';
import userReducer from './slices/userSlice';
import wordCardReducer from './slices/wordCardSlice';

export const store = configureStore({
  reducer: {
    wordCards: wordCardReducer,
    user: userReducer,
    snackBar: snackBarReducer
  }
});
