import styled from '@emotion/styled';
import { Box, Button, Stack } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';

import { Layout } from '../components/layout';
import { vocabularyAPI } from '../api/vocabulary';

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

const FlashCardPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [vocabulary, setVocabulary] = useState('');
  const [mean, setMean] = useState('');

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFlip = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  const handleCreate = async () => {
    try {
      await vocabularyAPI.create({ vocabulary, mean });
      // 成功後的處理，例如清空輸入框
      setVocabulary('');
      setMean('');
    } catch (error) {
      console.error('Error creating vocabulary:', error);
    }
  };

  const disabledSubmit = useMemo(() => {
    return vocabulary.trim() === '' || mean.trim() === '';
  }, [vocabulary, mean]);
  return (
    <Layout
      sx={{
        p: 4,
        height: '100vh',
        gap: 4
      }}
    >
      <Stack
        component={'form'}
        flex={0.5}
        position={'relative'}
        width={'100%'}
        onSubmit={handleFlip}
      >
        <MotionBox
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            cursor: 'pointer',
            height: '100%',
            width: '100%',
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
          onClick={handleCardClick}
        >
          {/* 正面 - 英文單字輸入 */}
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
              alignItems={'center'}
              bgcolor={purple[300]}
              borderRadius={5}
              boxShadow={4}
              display={'flex'}
              flex={1}
              height={'100%'}
              justifyContent={'center'}
              p={3}
              width={'100%'}
            >
              <InputStyled
                required
                placeholder="請輸入英文單字"
                rows={1}
                value={vocabulary}
                onChange={(e) => setVocabulary(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </Box>
          </Box>

          {/* 背面 - 筆記輸入 */}
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
              alignItems={'center'}
              bgcolor={grey[600]}
              borderRadius={5}
              boxShadow={4}
              display={'flex'}
              flex={1}
              height={'100%'}
              justifyContent={'center'}
              p={3}
              width={'100%'}
            >
              <InputStyled
                required
                placeholder="請輸入筆記"
                rows={1}
                style={{ color: 'white' }}
                value={mean}
                onChange={(e) => setMean(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </Box>
          </Box>
        </MotionBox>
      </Stack>

      <Button
        disabled={disabledSubmit}
        size="large"
        type="secondary"
        variant="contained"
        onClick={handleCreate}
      >
        完成
      </Button>
    </Layout>
  );
};

export default FlashCardPage;
