import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
`;

export const PreviewItem = styled.div`
  border: 1px solid #e5e5e5;
  flex: 0 1 calc(25% - 26px * 4);
  padding: 17px 32px;
  @media (max-width: 1200px) {
    flex: 0 1 calc(50% - 26px * 4);
  }
  @media (max-width: 600px) {
    flex: 0 1 100%;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
`;
