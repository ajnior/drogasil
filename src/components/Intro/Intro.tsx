import React from 'react';
import { Container } from './Intro.styles';

function Intro() {
  return (
    <Container className="intro">
      <h1>
        Crie este site <strong>responsivo</strong> com{' '}
        <strong className="intro__uppercase">React</strong> utilizando{' '}
        <strong>styled-componenets</strong>
      </h1>
      <p>
        A fonte utilizada é a Open Sans de 300 a 800m exemplo: "Open Sans",
        Helvetica, sans-serif, arial;
      </p>
      <p>Já as cores são</p>
      <ul>
        <li>
          <span style={{ background: '#007f56' }}></span>#007f56,
        </li>
        <li color={'#868686'}>
          {' '}
          <span style={{ background: '#868686' }}></span> #868686,
        </li>
        <li color={'#FE9481'}>
          <span style={{ background: '#FE9481' }}></span>
          #FE9481,{' '}
        </li>
        <li color={'#FCDA92'}>
          <span style={{ background: '#FCDA92' }}></span>
          #FCDA92 e
        </li>
        <li color={'#9C8CB9'}>
          <span style={{ background: '#9C8CB9' }}></span> #9C8CB9
        </li>
      </ul>
    </Container>
  );
}

export default Intro;
