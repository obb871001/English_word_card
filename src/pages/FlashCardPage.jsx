import { Box, Button, Stack } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FlipCard } from '../components/flashcard';
import { useSnackBar } from '../hooks/useSnackBar';
import { useVocabularyMutates } from '../hooks/vocabulary';

const FlashCardPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [vocabulary, setVocabulary] = useState('');
  const [mean, setMean] = useState('');
  const { showSuccess, showError } = useSnackBar();

  const navigate = useNavigate();
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  const { mutate } = useVocabularyMutates();

  const handleFlip = (flipped) => {
    setIsFlipped(flipped);
  };

  const handleCreate = async () => {
    try {
      await mutate({ vocabulary, mean });

      // 顯示成功訊息
      showSuccess(`單字「${vocabulary}」已成功新增！`);

      // 成功後的處理，例如清空輸入框
      setVocabulary('');
      setMean('');
      setIsFlipped(false); // 重置翻轉狀態

      // 如果是 modal 模式，關閉 modal
      if (backgroundLocation) {
        navigate(backgroundLocation.pathname);
      }
    } catch (error) {
      console.error('Error creating vocabulary:', error);

      // 顯示錯誤訊息
      showError('新增單字失敗，請稍後再試');
    }
  };

  const disabledSubmit = useMemo(() => {
    return vocabulary.trim() === '' || mean.trim() === '';
  }, [vocabulary, mean]);

  return (
    <Box
      sx={{
        p: 4,
        minHeight: '60vh',
        gap: 4,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Stack component={'form'} flex={0.5} position={'relative'} width={'100%'}>
        <FlipCard
          backPlaceholder="請輸入筆記"
          backValue={mean}
          frontPlaceholder="請輸入單字"
          frontValue={vocabulary}
          isFlipped={isFlipped}
          onBackChange={setMean}
          onFlip={handleFlip}
          onFrontChange={setVocabulary}
        />
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
    </Box>
  );
};

export default FlashCardPage;
