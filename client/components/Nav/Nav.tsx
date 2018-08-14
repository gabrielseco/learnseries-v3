import React from 'react';
import { NavigationList } from './Nav.style';

interface NavItemsProps {
  children: React.ReactNode;
}

const Nav: React.SFC<NavItemsProps> = ({ children }) => (
  <nav>
    <NavigationList>
      {children}
    </NavigationList>
  </nav>
);

export default Nav;
