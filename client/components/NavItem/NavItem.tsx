import * as React from 'react';
import { Anchor, NavigationItem } from './NavItem.style';

const NavItem = ({ children, URL }: { children: string, URL: string}) => (
  <NavigationItem>
    <Anchor href={URL}>{children}</Anchor>
  </NavigationItem>
);

export default NavItem;
