import styled from 'styled-components';
import { screenSizes } from '../../utils/styles/helpers';

export const Container = styled.footer`
  grid-column: 2 / 8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${screenSizes.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer {
    &__logos-container {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 65%;
      justify-content: center;
      margin: 1rem 0;
      img {
        margin-right: 1rem;
      }
      @media (max-width: ${screenSizes.tablet}) {
        margin: 2rem 0;
        flex-basis: 100%;
      }
    }
  }
`;
