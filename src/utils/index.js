/**
 * 格式化文字
 * @param {string} text - 要格式化的文字
 * @returns {string} 格式化後的文字
 */
export const formatText = (text) => {
  if (!text) return '';
  return text.trim().toLowerCase();
};

/**
 * 產生隨機 ID
 * @returns {string} 隨機 ID
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * 打亂陣列
 * @param {Array} array - 要打亂的陣列
 * @returns {Array} 打亂後的新陣列
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
