import styled from 'styled-components';
import PreviewBackground from './assets/Preview.png';

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 75px;
  width: 100%;
  margin-bottom: 36px;
`;
export const PreviewImage = styled.div`
  flex: 0 1 calc(50% - 37.5px);
  height: 100vh;
  max-height: 357px;
  max-width: 100%;
  background: url(${PreviewBackground}) top center / cover no-repeat;
  @media (max-width: 1100px) {
    flex: 0 1 100%;
  }
`;

export const PreviewContent = styled.div`
  flex: 0 1 calc(50% - 37.5px);
  @media (max-width: 1100px) {
    flex: 0 1 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 400;
  line-height: 42px;
`;

export const SubTitle = styled.div`
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 8px;
  height: 30px;
  align-items: center;
  color: #cc4c6e;
`;
