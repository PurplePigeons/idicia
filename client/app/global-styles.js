import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: whitesmoke;
    overflow-y: hidden;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li {
    font-family: Raleway;
    line-height: 1.5em;
  }
`;
