/* eslint-disable eqeqeq */
import React from 'react';
import { Container } from './Card.styles';

type ButtonColorScheme = {
  color: string;
  backgroundColor: string;
};

type Theme = 'light' | 'dark';

type Dispatch = React.Dispatch<React.SetStateAction<boolean>>;

type Props = {
  imageSrc: string;
  imageLabel: string;
  cardText: string;
  buttonLabel: string;
  buttonColorScheme: ButtonColorScheme;
  buttonState: boolean | Theme;
  buttonDispatch(): void;
};

function Card({
  imageSrc,
  imageLabel,
  cardText,
  buttonLabel,
  buttonColorScheme,
  buttonState,
  buttonDispatch,
}: Props) {
  console.log(buttonColorScheme);
  return (
    <Container
      className="card"
      color={buttonColorScheme.color}
      backgroundColor={buttonColorScheme.backgroundColor}
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
  );
}

export default Card;
