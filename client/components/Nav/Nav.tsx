import * as React from 'react';

const Nav = (props: { children: React.ReactNode}) => (
  <nav>
    <ul>
      {props.children}
    </ul>
  </nav>
);

export default Nav;
