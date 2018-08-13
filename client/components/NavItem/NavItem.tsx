import * as React from 'react';
import { Anchor } from './NavItem.style';

const NavItem = ({ children, URL }: { children: string, URL: string}) => (
  <li>
    <Anchor href={URL}>{children}</Anchor>
  </li>
);

export default NavItem;
