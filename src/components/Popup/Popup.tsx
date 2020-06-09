import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import CloseIcon from '../../assets/images/close-icon.svg';

import { Container } from './Popup.styles';

type Props = {
  content: string;
  close(): void;
};

function Popup({ content, close }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} className="popup">
      <div className="popup__content">
        <button className="popup__close-icon" onClick={close}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        {content}
      </div>
    </Container>
  );
}

export default Popup;
