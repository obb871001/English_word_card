# 專案資料夾結構

已為您建立符合 React 專案規範的資料夾結構：

## 📁 src/ 資料夾結構

```
src/
├── components/          # 可重複使用的元件
│   ├── ui/             # 基礎 UI 元件
│   └── layout/         # 版面配置元件
├── pages/              # 頁面元件
├── hooks/              # 自訂 React Hooks
├── utils/              # 工具函數
├── services/           # API 服務
├── store/              # 狀態管理
├── contexts/           # React Context
├── constants/          # 常數定義
├── styles/             # 樣式檔案
├── data/               # 靜態資料
├── types/              # TypeScript 型別定義
└── assets/             # 靜態資源
```

## 📁 根目錄結構

```
project-root/
├── docs/               # 專案文件
├── tests/              # 測試檔案
├── public/             # 公開靜態檔案
└── src/                # 原始碼
```

## 🎯 資料夾用途

- **components/**: 可重複使用的 React 元件
- **pages/**: 應用程式的頁面元件
- **hooks/**: 自訂 React Hooks
- **utils/**: 通用工具函數
- **services/**: API 呼叫和外部服務
- **store/**: 狀態管理（Redux, Zustand 等）
- **contexts/**: React Context API
- **constants/**: 應用程式常數
- **styles/**: 全域樣式和主題
- **data/**: 靜態資料和模擬資料
- **types/**: TypeScript 型別定義

## 📝 命名規範

- 元件檔案：PascalCase（例如：`WordCard.jsx`）
- Hook 檔案：camelCase 以 `use` 開頭（例如：`useWordCard.js`）
- 工具函數：camelCase（例如：`formatText.js`）
- 常數檔案：UPPER_CASE（例如：`API_ENDPOINTS.js`）

這個結構將幫助您：

- 保持程式碼組織良好
- 提高可維護性
- 方便團隊協作
- 符合 React 生態系統的最佳實踐
