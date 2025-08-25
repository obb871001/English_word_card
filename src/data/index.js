// 範例單字卡片資料
export const sampleWordCards = [
  {
    id: '1',
    word: 'hello',
    pronunciation: '/həˈloʊ/',
    translation: '哈囉，你好',
    partOfSpeech: '感嘆詞',
    example: 'Hello, how are you today?',
    exampleTranslation: '哈囉，你今天好嗎？',
    difficulty: 'easy'
  },
  {
    id: '2',
    word: 'beautiful',
    pronunciation: '/ˈbjuːtɪfl/',
    translation: '美麗的',
    partOfSpeech: '形容詞',
    example: 'She has a beautiful smile.',
    exampleTranslation: '她有著美麗的笑容。',
    difficulty: 'medium'
  },
  {
    id: '3',
    word: 'extraordinary',
    pronunciation: '/ɪkˈstrɔːrdəneri/',
    translation: '非凡的，特別的',
    partOfSpeech: '形容詞',
    example: 'Her performance was extraordinary.',
    exampleTranslation: '她的表現非常出色。',
    difficulty: 'hard'
  }
];

// 難度等級
export const difficultyLevels = [
  { value: 'easy', label: '簡單', color: '#4CAF50' },
  { value: 'medium', label: '中等', color: '#FF9800' },
  { value: 'hard', label: '困難', color: '#F44336' }
];
