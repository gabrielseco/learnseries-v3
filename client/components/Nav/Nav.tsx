import * as React from 'react';
import { NavigationList } from './Nav.style';

const Nav = (props: { children: React.ReactNode}) => (
  <nav>
    <NavigationList>
      {props.children}
    </NavigationList>
  </nav>
);

export default Nav;
