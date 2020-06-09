import styled from 'styled-components';
import { colors, shadows, screenSizes } from '../../utils/styles/helpers';

export const Container = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  text-shadow: ${(props) => (props.theme == 'light' ? shadows.text : 'none')};
  margin: 1rem 0;
  h1 {
    color: ${(props) => (props.theme == 'light' ? colors.rdGreen : 'white')};
    max-width: 80%;
    line-height: 4rem;
    font-size: 3.2rem;
    margin: 1rem auto;
    @media (max-width: ${screenSizes.tablet}) {
      font-size: 2.5rem;
      max-width: 100%;
    }
  }
  p {
    color: ${(props) => (props.theme == 'light' ? colors.rdGrey : 'white')};
    max-width: 60%;
    margin: 0 auto;
    font-size: 1.6rem;
    line-height: 2.6rem;
    @media (max-width: ${screenSizes.tablet}) {
      font-size: 1.4rem;
      max-width: 100%;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    max-width: 90%;
    margin: 1rem auto;
    @media (max-width: ${screenSizes.tablet}) {
      flex-wrap: wrap;
    }
  }
  li {
    color: ${(props) => (props.theme == 'light' ? colors.rdGrey : 'white')};
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin: 0 0.2rem;
    @media (max-width: ${screenSizes.tablet}) {
      font-size: 1.2rem;
      margin: 0.5rem 0.2rem;
    }
  }
  ul li span {
    width: 15px;
    border-radius: 100%;
    height: 15px;
    display: inline-block;
  }
  .intro {
    &__uppercase {
      text-transform: uppercase;
    }
  }
`;
