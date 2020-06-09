/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { colors } from '../../utils/styles/helpers';

interface Props {
  readonly name: string;
  readonly color: string;
  readonly backgroundColor: string;
  readonly overflowScroll?: boolean;
}

export const Container = styled.div<Props>`
  grid-column: span 2;
  display: flex;
  flex-wrap: wrap;
  background: ${(props) =>
    props.theme == 'light' ? 'white' : colors.rdDarkGray};
  max-width: 365px;
  @media (max-width: 768px) {
    grid-column: 1 /-1;
  }
  .card {
    &__media {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background: ${(props) => props.backgroundColor};
      padding: 2rem 0;
      min-height: 290px;
      h3 {
        text-align: center;
        font-size: 1.6rem;
        max-width: 80%;
        margin: 2rem 0 0;
        color: ${(props) =>
          props.theme == 'light' ? 'white' : colors.rdDarkGray};
      }
      img {
        max-width: 80%;
        margin: 0 auto;
      }
    }
    &__text {
      justify-content: center;
      padding: 1rem;
      text-align: left;
      p {
        color: ${(props) =>
          props.theme == 'light' ? colors.rdDarkGray : 'white'};
        max-height: ${(props) => (props.name == 'desktop' ? '68px' : 'auto')};
        max-height: ${(props) =>
          props.name == 'desktop' && props.overflowScroll ? '100px' : 'auto'};
        overflow: ${(props) =>
          props.name == 'desktop' && props.overflowScroll
            ? 'scroll'
            : 'hidden'};
      }
    }
    &__button {
      display: flex;
      justify-content: flex-end;
      flex-basis: 100%;
      margin: 1rem 1rem;
      button {
        border: none;
        padding: 0.5rem 1.2rem;
        font-size: 1rem;
        color: ${(props) =>
          props.theme == 'light' ? 'white' : colors.rdDarkGray};
        background: ${(props) => props.backgroundColor};
      }
    }
  }
`;
