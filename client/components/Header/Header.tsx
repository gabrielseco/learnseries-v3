import React from 'react';
import { Nav, NavItem } from 'components';
import { Wrapper, Container } from './Header.style';

const Header = () => (
  <Wrapper>
    <Container>
      <Nav>
        <NavItem URL='#'>Films</NavItem>
        <NavItem URL='#'>TV</NavItem>
        <NavItem URL='#'>Books</NavItem>
        <NavItem URL='#'>Statistics</NavItem>
      </Nav>
    </Container>
  </Wrapper>
);

export default Header;
