/* eslint-disable eqeqeq */
import React from 'react';

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
  buttonDispatch: Dispatch;
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
  function handleClick(): void {
    buttonDispatch(!buttonState);
  }

  return (
    <div className="card">
      <div className="card__media">
        <img src={imageSrc} alt="Card" />
        <h3> {imageLabel}</h3>
      </div>
      <div className="card__text">
        <p>{cardText}</p>
      </div>
      <div className="card__button" onClick={handleClick}>
        <button>{buttonLabel}</button>
      </div>
    </div>
  );
}

export default Card;
