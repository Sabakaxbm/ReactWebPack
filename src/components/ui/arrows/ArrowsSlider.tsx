import React from 'react';
import { Arrow } from '../../../assets';
import { ArrowResponse } from '../../../assets/icons/ArrowLeft';
import * as S from './style';

interface ArrowSliderProps {
  arrowRight: () => void;
  arrowLeft: () => void;
}

const ArrowsSlider: React.FC<ArrowSliderProps> = ({
  arrowRight,
  arrowLeft,
}) => {
  return (
    <S.ArrowContainer>
      <Arrow position={ArrowResponse.left} color={'gray'} onClick={arrowLeft} />
      <Arrow onClick={arrowRight} />
    </S.ArrowContainer>
  );
};

export default ArrowsSlider;
