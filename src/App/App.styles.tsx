/* eslint-disable eqeqeq */
import styled, { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background/background.jpg';

// Base Styles
export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
}

html {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: 'Open Sans', Helvetica, sans-serif, arial;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}
`;

export const Container = styled.div`
  background: ${(props) =>
    props.theme == 'light' ? `url(${background}) repeat` : 'black'};
  display: grid;
  grid-template-columns: 6.5% repeat(6, 1fr) 6.5%;
`;
