import * as React from 'react';
import { Header } from 'components';

const Layout = (props: {children: React.ReactNode}) => (
  <React.Fragment>
    <Header/>
    {props.children}
  </React.Fragment>
);

export default Layout;
