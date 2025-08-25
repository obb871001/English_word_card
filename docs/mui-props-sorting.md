# MUI Props 自動排序說明

## 功能概述

已配置 ESLint 規則 `react/jsx-sort-props` 來自動排序所有 JSX 屬性，包括 MUI 組件的 props。

## 排序規則

### 排序順序

1. **保留屬性**（如 `key`, `ref`）- 排在最前面
2. **縮寫屬性**（如 `required`, `disabled`）- 排在前面
3. **一般屬性** - 按字母順序排列
4. **回調函數**（如 `onClick`, `onChange`）- 排在最後
5. **多行屬性** - 排在最後

### 設定選項

```javascript
'react/jsx-sort-props': [
  'error',
  {
    callbacksLast: true,      // 回調函數排在最後
    shorthandFirst: true,     // 縮寫屬性排在前面
    multiline: 'last',        // 多行屬性排在最後
    ignoreCase: true,         // 忽略大小寫
    noSortAlphabetically: false, // 按字母順序排序
    reservedFirst: true       // 保留屬性排在最前面
  }
]
```

## 範例

### 自動修正前

```jsx
<Box
  width={'100%'}
  display={'flex'}
  flexDirection={'column'}
  alignItems={'center'}
  justifyContent={'center'}
  textAlign={'center'}
>
```

### 自動修正後

```jsx
<Box
  alignItems={'center'}
  display={'flex'}
  flexDirection={'column'}
  justifyContent={'center'}
  textAlign={'center'}
  width={'100%'}
>
```

## 可用指令

### 檢查並自動修正

```bash
# 修正整個專案的 props 排序
npm run lint:fix

# 修正特定檔案
npx eslint src/pages/WelcomePage.jsx --fix

# 只檢查不修正
npx eslint src/pages/WelcomePage.jsx
```

### 僅檢查 props 排序

```bash
npm run sort:props
```

## VS Code 整合

如果你有安裝 ESLint 擴充功能，當你儲存檔案時會自動排序 props（需要在 VS Code 設定中啟用 `editor.codeActionsOnSave`）。

## 支援的組件類型

- ✅ 所有 MUI 組件（Box, Typography, Button 等）
- ✅ 原生 HTML 元素
- ✅ 自訂組件
- ✅ 所有 JSX 屬性類型

## 常見排序結果

### MUI Box 組件

```jsx
<Box
  alignItems="center"     // 按字母排序
  display="flex"
  flexDirection="column"
  justifyContent="center"
  sx={{ mt: 2 }}         // sx 通常在中間
  onClick={handleClick}   // 回調函數在最後
>
```

### MUI Button 組件

```jsx
<Button
  color="primary"
  disabled              // 縮寫屬性在前面
  size="large"
  variant="contained"
  onClick={handleClick} // 回調函數在最後
>
```

這個設定確保你的 MUI 程式碼保持一致且易於閱讀！
