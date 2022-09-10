import React from 'react';
import * as C from '../ui/style';
import * as S from './style';

const Header: React.FC = () => {
  return (
    <S.HeaderBanner>
      <C.Container>
        <S.HeaderContainer>
          <S.Title>SKINDOM</S.Title>
          <S.SubTitle>Специальные цены только до 30 апреля</S.SubTitle>
          <S.Button>Перейти в каталог</S.Button>
        </S.HeaderContainer>
      </C.Container>
    </S.HeaderBanner>
  );
};

export default Header;
