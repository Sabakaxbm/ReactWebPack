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
            Ведущий эксперт нароссийском рынке профессиональной косметики
            изКореи—ККshop™
          </S.Title>
          <S.SubTitle>
            Мыделаем мирпрофессиональной корейской косметики доступным
            длякаждого косметолога вРоссии, предоставляя возможность работать
            случшими достижениями корейских учёных испециалистов вобласти
            сохранения здоровья иухода закожей
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
