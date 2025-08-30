import { Alert, Box, CircularProgress, Typography } from '@mui/material';

/**
 * @description 載入狀態組件
 * @returns {JSX.Element} LoadingState 組件
 */
export const LoadingState = () => (
  <Box
    sx={{
      p: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px'
    }}
  >
    <CircularProgress />
  </Box>
);

/**
 * @description 錯誤狀態組件
 * @param {Object} props - 組件屬性
 * @param {string} props.error - 錯誤訊息
 * @returns {JSX.Element} ErrorState 組件
 */
export const ErrorState = ({ error }) => (
  <Box sx={{ p: 2 }}>
    <Alert severity="error">載入單字失敗: {error}</Alert>
  </Box>
);

/**
 * @description 空狀態組件
 * @returns {JSX.Element} EmptyState 組件
 */
export const EmptyState = () => (
  <Box
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}
  >
    <Typography variant="h4">單字卡管理</Typography>
    <Typography color="text.secondary" variant="body1">
      還沒有任何單字，快去新增一些吧！
    </Typography>
  </Box>
);

/**
 * @description 單字計數組件
 * @param {Object} props - 組件屬性
 * @param {number} props.count - 單字數量
 * @returns {JSX.Element} VocabularyCount 組件
 */
export const VocabularyCount = ({ count }) => (
  <Typography color="text.secondary" variant="body1">
    共 {count} 個單字
  </Typography>
);
