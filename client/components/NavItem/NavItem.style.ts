import styled from 'styled-components';
import { media } from 'globals/styleUtils';

export const NavigationItem = styled.li`
  display: inline-block;
  margin-right: 1em;

  ${media.medium`
    margin-right: 1.25em;
  `}
`;

export const Anchor = styled.a`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  margin-right: 1.25em;
  padding: 0.625em 0.625em 0.3125em;

  &:hover {
    color: #000;
    border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    padding-bottom: 1.25em;
  }
`;
