import React from 'react';
import Nav from './nav';
import './styles.scss';
import Header from './components/header/Header';
import Preview from './components/preview/Preview';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Preview />
    </div>
  );
};

export default App;
