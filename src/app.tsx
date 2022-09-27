import React from 'react';
import Nav from './nav';
import './styles.scss';
import Header from './components/header/Header';
import Preview from './components/preview/Preview';
import Product from './components/product/Product';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Preview />
      <Product />
    </div>
  );
};

export default App;
