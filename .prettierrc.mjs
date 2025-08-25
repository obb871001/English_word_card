const config = {
  semi: true, // 每行結尾加分號
  singleQuote: true, // 使用單引號代替雙引號
  trailingComma: 'none', // 多行物件、陣列最後不加逗號
  printWidth: 80, // 每行最多 80 字元，利於閱讀與 git diff
  tabWidth: 2, // 縮排為 2 空格（React 社群標準）
  useTabs: false, // 使用空格代替 tab
  jsxSingleQuote: false, // JSX 中仍使用雙引號（符合 HTML 習慣）
  bracketSpacing: true, // 物件大括號內保留空格：{ foo: bar }
  bracketSameLine: false, // JSX 標籤右括號換行（替代已棄用的 jsxBracketSameLine）
  arrowParens: 'always', // 箭頭函式參數總是加括號 (x) => {...}
  endOfLine: 'lf' // 統一使用 LF 作為換行符號（UNIX 標準）
};

export default config;
