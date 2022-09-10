import styled from 'styled-components';

export const NavContainer = styled.nav`
  margin: 32px 20px 17px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const NavContainerItem = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
`;
export const NavItem = styled.div``;
