import React, { useState } from 'react';
import * as C from '../ui/style';
import * as S from './style';
import ArrowsSlider from '../ui/arrows/ArrowsSlider';
import SliderItem from '../ui/slider/sliderItem';

const Product: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const increment = (): void => {
    setNumber(number + 1);
  };
  const deIncrement = (): void => {
    setNumber(number - 1);
  };

  return (
    <C.Container>
      <C.SliderHeader>
        <C.SliderTitle>Новинки</C.SliderTitle>
        <ArrowsSlider arrowRight={increment} arrowLeft={deIncrement} />
      </C.SliderHeader>
      <S.ProductContainer>
        <SliderItem />
      </S.ProductContainer>
    </C.Container>
  );
};

export default Product;
