import styled from 'styled-components';
import { media } from 'globals/styleUtils';

export const HeaderVars = {
  headerHeight: '3.125em'
};

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  min-height: ${HeaderVars.headerHeight};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const Container = styled.div`
  margin: 0 auto;
  min-width: 70em;
  max-width: 71.25em;
  padding: 0.625em 0.5em;
  position: relative;

  ${media.medium`
    padding-left: 2.5em;
    padding-right: 2.5em;
  `};
`;
