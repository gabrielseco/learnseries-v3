import React from 'react';

const NavItem = ({ children, URL }: { children: string, URL: string}) => (
  <li>
    <a href={URL}>{children}</a>
  </li>
);

export default NavItem;
