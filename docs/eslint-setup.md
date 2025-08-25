# ESLint 配置說明

## 安裝的插件

1. **eslint-plugin-simple-import-sort** - 自動排序 import 語句
2. **eslint-plugin-import** - 檢查 import/export 語法
3. **eslint-plugin-unused-imports** - 檢測未使用的 import（已停用避免誤報）
4. **eslint-plugin-react-hooks** - React Hooks 規則
5. **eslint-plugin-react-refresh** - React Fast Refresh 支援

## 可用的 npm 腳本

### `npm run lint`

檢查所有檔案的程式碼品質問題，不會修改任何檔案。

```bash
npm run lint
```

### `npm run lint:fix`

自動修復可修復的問題，包括：

- Import 排序
- 缺少的分號
- 多餘的空格
- 其他格式問題

```bash
npm run lint:fix
```

### `npm run lint:imports`

專門修復 import 排序問題：

```bash
npm run lint:imports
```

## ESLint 規則配置

### 未使用變數檢測

- ✅ 正確識別 React 組件使用
- ✅ 忽略以大寫字母或底線開頭的變數
- ✅ 忽略以底線開頭的參數

### Import 自動排序

- ✅ 第三方套件 import 在最上方
- ✅ 相對路徑 import 在下方
- ✅ 自動移除多餘的空行
- ✅ 自動合併重複的 import

### React 專用規則

- ✅ 不需要手動 import React (React 17+)
- ✅ React Hooks 使用規則檢查
- ✅ React Fast Refresh 支援

## 使用方式

### 在開發過程中

VS Code 會自動顯示 ESLint 錯誤和警告（紅線和黃線）。

### 手動執行檢查

```bash
# 檢查特定檔案
npx eslint src/App.jsx

# 檢查並修復特定檔案
npx eslint src/App.jsx --fix

# 檢查整個專案
npm run lint

# 修復整個專案
npm run lint:fix
```

### VS Code 設定

建議在 VS Code 中安裝 ESLint 擴充功能，並在設定中啟用儲存時自動修復：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 常見問題

### 誤報的未使用 import

如果遇到 React 組件被誤報為未使用，目前已經調整規則來避免這個問題。

### Import 排序

所有 import 會自動按照以下順序排列：

1. Node.js 內建模組
2. 第三方套件 (node_modules)
3. 內部模組 (相對路徑)

### 效能考量

ESLint 配置已經排除了 `dist`、`node_modules` 等目錄，以提升檢查速度。
