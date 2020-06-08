import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Cards from '../containers/Cards/Cards';

// Base Styles
import '../utils/styles/base.css';

import { Container } from './App.styles';

function App() {
  return (
    <Container className="App">
      <Header />
      <Main>
        <Cards />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
