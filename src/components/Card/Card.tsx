/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import Popup from '../Popup';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './Card.styles';

type ButtonColorScheme = {
  color: string;
  backgroundColor: string;
};

type Theme = 'light' | 'dark';

type Dispatch = React.Dispatch<React.SetStateAction<boolean>>;

type Props = {
  name: string;
  imageSrc: string;
  imageLabel: string;
  cardText: string;
  buttonLabel: string;
  buttonColorScheme: ButtonColorScheme;
  buttonState: boolean | Theme;
  buttonDispatch(): void;
  popupText?: string;
};

function Card({
  name,
  imageSrc,
  imageLabel,
  cardText,
  buttonLabel,
  buttonColorScheme,
  buttonState,
  buttonDispatch,
  popupText,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const renderPopup = name == 'tablet' && buttonState;
  const content = popupText ? popupText : '';

  return (
    <>
      {renderPopup ? <Popup content={content} close={buttonDispatch} /> : null}
      <Container
        theme={theme}
        name={name}
        className="card"
        color={buttonColorScheme.color}
        backgroundColor={buttonColorScheme.backgroundColor}
        overflowScroll={typeof buttonState == 'boolean' ? buttonState : false}
      >
        <div className="card__media">
          <img src={imageSrc} alt="Card" />
          <h3> {imageLabel}</h3>
        </div>
        <div className="card__text">
          <p>{cardText}</p>
        </div>
        <div className="card__button">
          <button onClick={buttonDispatch}>{buttonLabel}</button>
        </div>
      </Container>
    </>
  );
}

export default Card;
