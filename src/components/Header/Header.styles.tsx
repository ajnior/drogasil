import styled from 'styled-components';
import { colors, shadows, screenSizes } from '../../utils/styles/helpers';

export const Container = styled.header`
  grid-column: 2 / 8;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.rdLightGray};
  @media (max-width: ${screenSizes.desktop}) {
    grid-column: 1 / -1;
    border-bottom: none;
  }

  .header {
    &__nav-container {
      @media (max-width: ${screenSizes.tablet}) {
        width: 100%;
      }
    }
    &__nav-container ul {
      display: flex;
      flex-wrap: wrap;
    }
    &__nav-container ul li {
      font-size: 1.25rem;
      margin-left: 1.6rem;
      color: ${(props) => (props.theme == 'light' ? colors.rdGreen : 'white')};
      text-transform: uppercase;
      text-shadow: ${(props) =>
        props.theme == 'light' ? shadows.text : 'none'};
      @media (max-width: ${screenSizes.desktop}) {
        color: ${colors.white};
        padding: 0.8rem 0;
        background-color: ${colors.rdPurple};
        margin-left: 0;
        text-shadow: none;
      }
    }
    &__nav-container ul a {
      @media (max-width: ${screenSizes.desktop}) {
        margin-left: 0;
        width: 100%;
        text-align: center;
      }
    }
    &__logo-container {
      margin: 1rem 0;
      @media (max-width: ${screenSizes.desktop}) {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
`;
