import styled from 'styled-components';
import { media } from 'globals/styleUtils';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  ${media.medium`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.large`
    grid-template-columns: repeat(5, 1fr);
  `};
`;
