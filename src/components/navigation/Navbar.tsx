import React from 'react';
import * as C from '../ui/style';
import * as S from './style';
import { LogoIcon } from '../../assets/index';
import NavIcons from './NavIcons';

const Navbar: React.FC = () => {
  const navObj = [
    'Каталог',
    'Клуб косметологов',
    'Сертификаты',
    'Доставка и оплата',
    'Контакты',
    'Блог',
  ];
  return (
    <C.Container>
      <S.NavContainer>
        <S.NavContainerItem>
          <LogoIcon />
          {navObj.map((text) => (
            <S.NavItem key={text}>{text}</S.NavItem>
          ))}
        </S.NavContainerItem>
        <S.NavContainerItem>
          <NavIcons />
        </S.NavContainerItem>
      </S.NavContainer>
    </C.Container>
  );
};

export default Navbar;
