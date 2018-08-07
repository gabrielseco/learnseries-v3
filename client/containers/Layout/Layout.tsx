import React from 'react';
import { Header } from 'components';

const Layout = (props) => (
  <React.Fragment>
    <Header/>
    {props.children}
  </React.Fragment>
);

export default Layout;
