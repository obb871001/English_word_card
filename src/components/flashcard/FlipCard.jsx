import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const InputStyled = styled.textarea`
  border: 2px dashed ${grey[400]};
  border-radius: 8px;
  background-color: transparent;
  color: white;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  padding-block: 1.5rem;
  padding-inline: 1rem;
  resize: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

/**
 * @description 翻轉卡片組件
 * @param {Object} props - 組件屬性
 * @param {string} props.frontValue - 正面輸入值
 * @param {string} props.backValue - 背面輸入值
 * @param {Function} props.onFrontChange - 正面輸入變更回調
 * @param {Function} props.onBackChange - 背面輸入變更回調
 * @param {string} [props.frontPlaceholder] - 正面佔位符
 * @param {boolean} [props.frontReadOnly] - 正面是否只讀
 * @param {string} [props.backPlaceholder] - 背面佔位符
 * @param {boolean} [props.backReadOnly] - 背面是否只讀
 * @param {string} [props.frontColor] - 正面顏色
 * @param {string} [props.backColor] - 背面顏色
 * @param {string} [props.height] - 卡片高度
 * @returns {JSX.Element} FlipCard 組件
 */
const FlipCard = ({
  frontValue,
  backValue,
  onFrontChange,
  onBackChange,
  frontPlaceholder = '請輸入內容',
  frontReadOnly = false,
  backPlaceholder = '請輸入內容',
  backReadOnly = false,
  frontColor = purple[300],
  backColor = grey[600],
  height = '350px'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <MotionBox
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{
        cursor: 'pointer',
        height,
        width: '100%',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      onClick={handleCardClick}
    >
      {/* 正面 */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            bgcolor: frontColor,
            borderRadius: 5,
            boxShadow: 4,
            display: 'flex',
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            p: 3,
            width: '100%'
          }}
        >
          <InputStyled
            required
            placeholder={frontPlaceholder}
            readOnly={frontReadOnly}
            rows={1}
            value={frontValue}
            onChange={(e) => onFrontChange(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      </Box>

      {/* 背面 */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            bgcolor: backColor,
            borderRadius: 5,
            boxShadow: 4,
            display: 'flex',
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            p: 3,
            width: '100%'
          }}
        >
          <InputStyled
            required
            placeholder={backPlaceholder}
            readOnly={backReadOnly}
            rows={1}
            style={{ color: 'white' }}
            value={backValue}
            onChange={(e) => onBackChange(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      </Box>
    </MotionBox>
  );
};

export default FlipCard;
