import React from 'react';
import { Nav, NavItem } from 'components';

const Header = () => (
  <div>
    <h3>LearnSeries</h3>
    <Nav>
      <NavItem URL='#'>Films</NavItem>
      <NavItem URL='#'>TV</NavItem>
      <NavItem URL='#'>Books</NavItem>
      <NavItem URL='#'>Statistics</NavItem>
    </Nav>
  </div>
);

export default Header;
