import React from 'react';
import * as S from './style';

const PreviewFooter: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.PreviewItem>
          <S.Text>Безупречный состав и эффективность</S.Text>
        </S.PreviewItem>
        <S.PreviewItem>
          <S.Text>Натуральность и экологичность</S.Text>
        </S.PreviewItem>
        <S.PreviewItem>
          <S.Text>Наличный и безналичный расчет</S.Text>
        </S.PreviewItem>
        <S.PreviewItem>
          <S.Text>Доставка по всей России</S.Text>
        </S.PreviewItem>
      </S.Container>
    </>
  );
};

export default PreviewFooter;
