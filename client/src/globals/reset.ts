import { css } from 'styled-components';

const resetCss = css`
:root {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background: #ffffff;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
}

ul {
  padding-left: 0;
}

img {
  max-width: 100%;
}

h2 {
  font-size: 2rem;
}
`;

export default resetCss;