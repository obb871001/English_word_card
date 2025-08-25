// 測試文件 - 未使用的 import
import React from 'react';
import { useState } from 'react'; // 這個有使用
// 這個沒使用 - 應該被檢測到

export const TestComponent = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
