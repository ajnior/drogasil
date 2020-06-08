/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../assets/images/logo.png';

import { Container } from './Header.styles';

function Header() {
  return (
    <Container className="header">
      <div className="header__logo-container">
        <img src={logo} alt="Raia Drogasil Logo" />
      </div>
      <nav className="header__nav-container">
        <ul>
          <a href="#">
            <li>Html5</li>
          </a>
          <a href="#">
            <li>CSS3</li>
          </a>
          <a href="#">
            <li>Javascript</li>
          </a>
          <a href="#">
            <li>React</li>
          </a>
          <a href="#">
            <li>Redux</li>
          </a>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
