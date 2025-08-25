import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  currentCard: null,
  studyMode: 'flashcard', // 'flashcard', 'quiz', 'typing'
  studySession: {
    isActive: false,
    currentIndex: 0,
    totalCards: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  },
  filters: {
    difficulty: 'all', // 'easy', 'medium', 'hard', 'all'
    category: 'all'
  }
};

const wordCardSlice = createSlice({
  name: 'wordCards',
  initialState,
  reducers: {
    // 設定單字卡片
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    // 新增單字卡片
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    // 更新單字卡片
    updateCard: (state, action) => {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (index !== -1) {
        state.cards[index] = { ...state.cards[index], ...action.payload };
      }
    },
    // 刪除單字卡片
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    // 設定當前卡片
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
    // 設定學習模式
    setStudyMode: (state, action) => {
      state.studyMode = action.payload;
    },
    // 開始學習會話
    startStudySession: (state, action) => {
      state.studySession = {
        isActive: true,
        currentIndex: 0,
        totalCards: action.payload.totalCards,
        correctAnswers: 0,
        wrongAnswers: 0
      };
    },
    // 結束學習會話
    endStudySession: (state) => {
      state.studySession.isActive = false;
    },
    // 下一張卡片
    nextCard: (state) => {
      if (state.studySession.currentIndex < state.studySession.totalCards - 1) {
        state.studySession.currentIndex++;
      }
    },
    // 記錄正確答案
    recordCorrectAnswer: (state) => {
      state.studySession.correctAnswers++;
    },
    // 記錄錯誤答案
    recordWrongAnswer: (state) => {
      state.studySession.wrongAnswers++;
    },
    // 設定篩選條件
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  }
});

export const {
  setCards,
  addCard,
  updateCard,
  deleteCard,
  setCurrentCard,
  setStudyMode,
  startStudySession,
  endStudySession,
  nextCard,
  recordCorrectAnswer,
  recordWrongAnswer,
  setFilters
} = wordCardSlice.actions;

export default wordCardSlice.reducer;
