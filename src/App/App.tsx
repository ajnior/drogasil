import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Cards from '../containers/Cards/Cards';

// Base Styles
import '../utils/styles/base.css';

import { Container } from './App.styles';

function App() {
  const { theme } = useContext(ThemeContext);

  console.log('theme:::', theme);

  return (
    <Container className="App">
      <Header />
      <Main>
        <>
          <Intro />
          <Cards />
        </>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
