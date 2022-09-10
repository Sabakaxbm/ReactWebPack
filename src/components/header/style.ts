import styled from 'styled-components';
import HeaderBackground from './assets/Header.png';

export const HeaderBanner = styled.header`
  height: 100vh;
  max-width: 100%;
  max-height: 698px;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7)),
    url(${HeaderBackground}) top center / cover no-repeat;
`;

export const HeaderContainer = styled.div`
  margin: 0 20px;
  padding: 90px 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    padding: 90px 0;
  }
`;

export const Title = styled.div`
  font-size: 99px;
  font-weight: bold;
  line-height: 149px;
  @media (max-width: 900px) {
    font-size: 67px;
  }
`;

export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 45px;
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #000000;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  width: 268px;
  height: 58px;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    height: 70px;
    font-size: 25px;
  }
`;
