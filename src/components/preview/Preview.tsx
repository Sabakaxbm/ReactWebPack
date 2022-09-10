import React from 'react';
import * as C from '../ui/style';
import * as S from './style';
import Arrow from './assets/Arrow';

const Preview: React.FC = () => {
  return (
    <C.Container>
      <S.PreviewContainer>
        <S.PreviewImage />
        <S.PreviewContent>
          <S.Title>
            Ведущий эксперт на российском рынке профессиональной косметики
            из Кореи—ККshop™
          </S.Title>
          <S.SubTitle>
            Мы делаем мир профессиональной корейской косметики доступным
            для каждого косметолога в России, предоставляя возможность работать
            с лучшими достижениями корейских учёных и специалистов в области
            сохранения здоровья и ухода за кожей
          </S.SubTitle>
          <S.Aside>
            <>Подробнее</>
            <Arrow />
          </S.Aside>
        </S.PreviewContent>
      </S.PreviewContainer>
    </C.Container>
  );
};

export default Preview;
