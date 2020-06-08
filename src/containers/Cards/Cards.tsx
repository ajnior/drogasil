import React, { useState, useContext, useEffect } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import desktopCardImage from '../../assets/images/desktop-responsive-design.png';
import tabletsCardImage from '../../assets/images/tablets-responsive-design.png';
import mobileCardImage from '../../assets/images/mobile-responsive-design.png';

import { colors } from '../../utils/styles/helpers';

import CardInterface from '../../components/Card';

function Card() {
  const [desktopCardState, setDesktopCardState] = useState<boolean>(false);
  const [tabletCardState, setTabletCardState] = useState<boolean>(false);
  const [mobileCardState, setMobileCardState] = useState<boolean>(false);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleDesktopCard(): void {
    setDesktopCardState(!desktopCardState);
  }

  function handleTabletCard(): void {
    setTabletCardState(!tabletCardState);
  }

  function handleMobileCard(): void {
    if (setTheme) {
      setTheme(mobileCardState ? 'dark' : 'light');
      setMobileCardState(!mobileCardState);
    }
  }

  useEffect(() => {
    setTheme && setTheme(mobileCardState ? 'dark' : 'light');
  }, [theme, setTheme, mobileCardState]);

  const cardList = [
    {
      id: 0,
      imageSrc: desktopCardImage,
      imageLabel: 'Site Responsivo DESKTOP',
      cardText:
        'Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.',
      buttonLabel: 'Leia mais...',
      buttonColorScheme: {
        color: colors.white,
        backgroundColor: colors.rdCoral,
      },
      buttonState: desktopCardState,
      buttonDispatch: handleDesktopCard,
    },
    {
      id: 1,
      imageSrc: tabletsCardImage,
      imageLabel: 'Site Responsivo TABLET',
      cardText:
        'Quando pressionado o botão Leia mais.. informação deverá aparecer completa em um popup na tela.',
      buttonLabel: 'Leia mais...',
      buttonColorScheme: {
        color: colors.white,
        backgroundColor: colors.rdYellow,
      },
      buttonState: tabletCardState,
      buttonDispatch: handleTabletCard,
    },
    {
      id: 2,
      imageSrc: mobileCardImage,
      imageLabel: 'Site Responsivo MOBILE',
      cardText:
        'Quando pressionado o botão alterar tema... modifique o tema do site para black friday a seu gosto.',
      buttonLabel: 'Alterar tema...',
      buttonColorScheme: {
        color: colors.white,
        backgroundColor: colors.rdPurple,
      },
      buttonState: mobileCardState,
      buttonDispatch: handleMobileCard,
    },
  ];

  const mapDispatchToCards = cardList.map((card) => {
    return (
      <CardInterface
        key={card.id}
        imageSrc={card.imageSrc}
        imageLabel={card.imageLabel}
        cardText={card.cardText}
        buttonLabel={card.buttonLabel}
        buttonColorScheme={card.buttonColorScheme}
        buttonState={card.buttonState}
        buttonDispatch={card.buttonDispatch}
      />
    );
  });

  return <>{mapDispatchToCards}</>;
}

export default Card;
