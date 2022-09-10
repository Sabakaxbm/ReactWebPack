import React from 'react';
import * as S from './style';
import * as C from '../ui/style';
import PreviewHeader from './PreviewHeader/PreviewHeader';
import PreviewFooter from './PreviewFooter/PreviewFooter';

const Preview: React.FC = () => {
  return (
    <C.Container>
      <S.PreviewItems>
        <PreviewHeader />
        <PreviewFooter />
      </S.PreviewItems>
    </C.Container>
  );
};

export default Preview;
