import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';

/**
 * @description 單字篩選和搜尋組件
 * @param {Object} props - 組件屬性
 * @param {string} props.searchTerm - 搜尋關鍵字
 * @param {Function} props.onSearchChange - 搜尋變更回調
 * @param {string} props.categoryFilter - 分類篩選
 * @param {Function} props.onCategoryChange - 分類變更回調
 * @param {Array} props.categories - 可用的分類選項
 * @param {string} props.difficultyFilter - 難度篩選
 * @param {Function} props.onDifficultyChange - 難度變更回調
 * @returns {JSX.Element} VocabularyFilters 組件
 */
const VocabularyFilters = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  categories = [],
  difficultyFilter,
  onDifficultyChange
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
      {/* 搜尋框 */}
      <TextField
        placeholder="搜尋單字..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        sx={{ flex: 1, minWidth: 200 }}
      />

      {/* 分類篩選 */}
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>分類</InputLabel>
        <Select
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
          label="分類"
        >
          <MenuItem value="">全部</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 難度篩選 */}
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>難度</InputLabel>
        <Select
          value={difficultyFilter}
          onChange={(e) => onDifficultyChange(e.target.value)}
          label="難度"
        >
          <MenuItem value="">全部</MenuItem>
          <MenuItem value="1">⭐</MenuItem>
          <MenuItem value="2">⭐⭐</MenuItem>
          <MenuItem value="3">⭐⭐⭐</MenuItem>
          <MenuItem value="4">⭐⭐⭐⭐</MenuItem>
          <MenuItem value="5">⭐⭐⭐⭐⭐</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default VocabularyFilters;
