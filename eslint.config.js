import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules', 'vite.config.js', 'eslint.config.js']
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      'unused-imports': unusedImports,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node // 加入 Node.js 環境支援
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx']
        }
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules, // 關閉與 Prettier 衝突的 ESLint 規則

      // Prettier 規則
      'prettier/prettier': 'error',

      'no-unused-vars': 'off', // 關閉原生規則，使用 unused-imports 代替
      'unused-imports/no-unused-imports': 'warn', // 檢測並可自動移除未使用的 import
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^(React|_)$',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要 import React
      'react/prop-types': 'off', // 關閉 PropTypes 檢查，適用於純 JavaScript 專案
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true, // 回調函數排在最後
          shorthandFirst: true, // 縮寫屬性排在前面
          shorthandLast: false,
          multiline: 'last', // 多行屬性排在最後
          ignoreCase: true, // 忽略大小寫
          noSortAlphabetically: false, // 按字母順序排序
          reservedFirst: true // 保留屬性（如 key, ref）排在最前面
        }
      ],

      // Import 排序規則
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Import 相關規則 (僅針對 src 目錄)
      'import/no-unresolved': [
        'error',
        { ignore: ['^@vitejs/', '^vite$', '^eslint/'] }
      ],
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      // React Refresh 規則
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
];
