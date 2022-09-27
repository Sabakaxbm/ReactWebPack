import React from 'react';
import * as S from './style';
import ItemImage from './assets/img/Item1.png';

const SliderItem: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderItem>
        <S.InfoSell>Sell</S.InfoSell>
        <S.ImageItem src={ItemImage} />
      </S.HeaderItem>
      <S.ContentItem>
        <S.Title>{'Slimming Gel Body'.toUpperCase()}</S.Title>
        <S.Content>
          <S.Description>Гель для тела для похудения</S.Description>
          <S.Price>
            <S.Discount>2 480 руб</S.Discount>
            <S.WithoutDiscount>3579 руб</S.WithoutDiscount>
          </S.Price>
        </S.Content>
      </S.ContentItem>
    </S.Container>
  );
};

export default SliderItem;
