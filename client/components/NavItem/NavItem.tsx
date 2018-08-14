import React from 'react';
import { Anchor, NavigationItem } from './NavItem.style';

interface NavItemProps {
  children: string;
  URL: string;
}

const NavItem: React.SFC<NavItemProps> = ({  children, URL }) => (
  <NavigationItem>
    <Anchor href={URL}>{children}</Anchor>
  </NavigationItem>
);

export default NavItem;
