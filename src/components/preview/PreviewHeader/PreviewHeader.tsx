import React from 'react';
import * as S from './style';
import Arrow from './assets/Arrow';

const PreviewHeader: React.FC = () => {
  return (
    <>
      <S.PreviewContainer>
        <S.PreviewImage />
        <S.PreviewContent>
          <S.Title>
            Ведущий эксперт на российском рынке профессиональной косметики из
            Кореи—КК shop™
          </S.Title>
          <S.SubTitle>
            Мы делаем мир профессиональной корейской косметики доступным для
            каждого косметолога в России, предоставляя возможность работать
            случшими достижениями корейских учёных и специалистов в области
            сохранения здоровья и ухода за кожей
          </S.SubTitle>
          <S.Aside>
            <>Подробнее</>
            <Arrow />
          </S.Aside>
        </S.PreviewContent>
      </S.PreviewContainer>
    </>
  );
};

export default PreviewHeader;
