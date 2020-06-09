import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Cards from '../containers/Cards/Cards';

// Fonts
import '../utils/styles/fonts.css';

import { Container, GlobalStyle } from './App.styles';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} className="App">
      <GlobalStyle />
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
