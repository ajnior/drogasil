import styled from 'styled-components';
import background from '../assets/images/background/background.jpg';

export const Container = styled.div`
  background: url(${background}) repeat;
  display: grid;
  grid-template-columns: 6.5% repeat(6, 1fr) 6.5%;
`;
