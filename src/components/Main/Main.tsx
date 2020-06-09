import React, { ReactElement } from 'react';

import { Container } from './Main.styles';

type Props = {
  children: ReactElement;
};

function Main({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Main;
