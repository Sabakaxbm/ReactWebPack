import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
   {
    width: 100px;
    height: 50px;
    background-color: red;
    color: white;
  }
`;

const Nav: React.FC = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button>Bay</Button>
    </div>
  );
};

export default Nav;
