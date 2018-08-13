import styled from 'styled-components';

export const Anchor = styled.a`
  color: rgba(0, 0, 0, 0.8);
  display: inline-block;
  font-weight: 400;
  margin-right: 1.25em;
  padding: 0.625em 0.625em 0.3125em;

  &:hover {
    color: rgba(0, 0, 0, 0.1);
    border-bottom: 2px rgba(0, 0, 0, 0.8);
    padding-bottom: 1.25em;
  }
`;
