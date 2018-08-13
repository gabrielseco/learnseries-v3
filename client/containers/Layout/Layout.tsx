import * as React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components'; 
import styledNormalize from 'styled-normalize';
import { theme } from 'globals/theme';
import resetCss from 'globals/reset';
import { Header } from 'components';

injectGlobal`
  ${styledNormalize}
  ${resetCss}
`

const Layout = (props: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header/>
      {props.children}
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
