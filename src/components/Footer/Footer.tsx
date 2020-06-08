import React from 'react';
import drogaRaiaLogo from '../../assets/images/logo_drogaraia.png';
import drogasilLogo from '../../assets/images/logo_drogasil.png';
import farmasilLogo from '../../assets/images/logo_farmasil.png';
import universLogo from '../../assets/images/logo_univers.png';
import fourBioLogo from '../../assets/images/logo_4bio.png';
import raiaDrogasilLogo from '../../assets/images/logo_small.png';

import { Container } from './Footer.styles';

function Footer() {
  return (
    <Container className="footer">
      <div className="footer__paragraph-container">
        <p>RD 2017. Todos os direitos reservados</p>
      </div>
      <div className="footer__logos-container">
        <img src={drogaRaiaLogo} alt="Droga Raia Logo" />
        <img src={drogasilLogo} alt="Drogasil Logo" />
        <img src={farmasilLogo} alt="Farmasil Logo" />
        <img src={universLogo} alt="Univers Logo" />
        <img src={fourBioLogo} alt="4Bio Logo" />
      </div>
      <div className="footer__main-logo-container">
        <img src={raiaDrogasilLogo} alt="Raia Drogasil Logo" />
      </div>
    </Container>
  );
}

export default Footer;
